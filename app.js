class ChatApp {
    constructor() {
        this.chats = JSON.parse(localStorage.getItem('chats')) || [];
        this.currentChatId = localStorage.getItem('currentChatId') || null;
        this.apiKey = localStorage.getItem('groqApiKey') || '';
        this.currentModel = localStorage.getItem('model') || 'llama-3.3-70b-versatile';
        this.isTyping = false;
        
        this.init();
    }

    init() {
        // Setup event listeners
        const input = document.getElementById('messageInput');
        input.addEventListener('input', () => this.autoResize(input));
        
        // Initialize model selector
        document.getElementById('modelSelect').value = this.currentModel;
        
        // Load API key to settings
        document.getElementById('apiKey').value = this.apiKey;
        
        // Render chat list
        this.renderChatList();
        
        // Load current chat
        if (this.currentChatId) {
            this.loadChat(this.currentChatId);
        }
        
        // Close modal on outside click
        document.getElementById('settingsModal').addEventListener('click', (e) => {
            if (e.target.id === 'settingsModal') {
                this.toggleSettings();
            }
        });
    }

    autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
    }

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    newChat() {
        this.currentChatId = null;
        localStorage.removeItem('currentChatId');
        this.renderMessages([]);
        document.getElementById('welcomeScreen').style.display = 'flex';
        this.renderChatList();
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('open');
        }
    }

    createChat(title = 'Cuộc trò chuyện mới') {
        const chat = {
            id: this.generateId(),
            title: title,
            messages: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        this.chats.unshift(chat);
        this.saveChats();
        this.currentChatId = chat.id;
        localStorage.setItem('currentChatId', chat.id);
        
        return chat;
    }

    loadChat(chatId) {
        this.currentChatId = chatId;
        localStorage.setItem('currentChatId', chatId);
        
        const chat = this.chats.find(c => c.id === chatId);
        if (chat) {
            document.getElementById('welcomeScreen').style.display = 'none';
            this.renderMessages(chat.messages);
        }
        
        this.renderChatList();
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('open');
        }
    }

    deleteChat(chatId, event) {
        event.stopPropagation();
        
        if (!confirm('Bạn có chắc muốn xóa cuộc trò chuyện này?')) {
            return;
        }
        
        this.chats = this.chats.filter(c => c.id !== chatId);
        this.saveChats();
        
        if (this.currentChatId === chatId) {
            this.newChat();
        } else {
            this.renderChatList();
        }
    }

    clearAllChats() {
        if (!confirm('Bạn có chắc muốn xóa TẤT CẢ cuộc trò chuyện?')) {
            return;
        }
        
        this.chats = [];
        this.saveChats();
        this.newChat();
        this.toggleSettings();
    }

    saveChats() {
        localStorage.setItem('chats', JSON.stringify(this.chats));
    }

    updateChatTitle(chatId, title) {
        const chat = this.chats.find(c => c.id === chatId);
        if (chat && title) {
            // Truncate title to 30 chars
            chat.title = title.length > 30 ? title.substring(0, 30) + '...' : title;
            chat.updatedAt = new Date().toISOString();
            this.saveChats();
            this.renderChatList();
        }
    }

    renderChatList() {
        const container = document.getElementById('chatList');
        container.innerHTML = '';
        
        this.chats.forEach(chat => {
            const item = document.createElement('div');
            item.className = `chat-item ${chat.id === this.currentChatId ? 'active' : ''}`;
            item.onclick = () => this.loadChat(chat.id);
            
            item.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span class="chat-title">${this.escapeHtml(chat.title)}</span>
                <button class="delete-chat" onclick="chatApp.deleteChat('${chat.id}', event)" title="Xóa">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            `;
            
            container.appendChild(item);
        });
    }

    renderMessages(messages) {
        const container = document.getElementById('messages');
        container.innerHTML = '';
        
        if (messages.length === 0) {
            document.getElementById('welcomeScreen').style.display = 'flex';
            return;
        }
        
        document.getElementById('welcomeScreen').style.display = 'none';
        
        messages.forEach((msg, index) => {
            this.appendMessageToDOM(msg, index);
        });
        
        this.scrollToBottom();
        
        // Highlight code blocks
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

    appendMessageToDOM(msg, index) {
        const container = document.getElementById('messages');
        const div = document.createElement('div');
        div.className = `message ${msg.role}`;
        div.id = `msg-${index}`;
        
        const content = msg.role === 'assistant' 
            ? marked.parse(msg.content)
            : this.escapeHtml(msg.content).replace(/\n/g, '<br>');
        
        div.innerHTML = `
            <div class="message-avatar">${msg.role === 'user' ? 'B' : 'AI'}</div>
            <div class="message-content">
                ${content}
                <div class="message-actions">
                    <button class="message-action-btn" onclick="chatApp.copyMessage(${index})" title="Sao chép">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    </button>
                    <button class="message-action-btn" onclick="chatApp.regenerateMessage(${index})" title="Tạo lại">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="23 4 23 10 17 10"></polyline>
                            <polyline points="1 20 1 14 7 14"></polyline>
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(div);
    }

    async sendMessage() {
        const input = document.getElementById('messageInput');
        const content = input.value.trim();
        
        if (!content || this.isTyping) return;
        
        // Check API key
        if (!this.apiKey) {
            alert('Vui lòng thêm Groq API Key trong Cài đặt');
            this.toggleSettings();
            return;
        }
        
        // Create new chat if needed
        if (!this.currentChatId) {
            this.createChat(content.substring(0, 30));
        }
        
        const chat = this.chats.find(c => c.id === this.currentChatId);
        
        // Add user message
        const userMsg = { role: 'user', content };
        chat.messages.push(userMsg);
        chat.updatedAt = new Date().toISOString();
        
        // Update title if first message
        if (chat.messages.length === 1) {
            this.updateChatTitle(chat.id, content);
        }
        
        this.saveChats();
        this.renderChatList();
        
        // Clear input
        input.value = '';
        input.style.height = 'auto';
        
        // Render messages
        this.renderMessages(chat.messages);
        
        // Send to API
        await this.sendToAPI(chat);
    }

    sendQuickMessage(content) {
        document.getElementById('messageInput').value = content;
        this.sendMessage();
    }

    async sendToAPI(chat) {
        this.isTyping = true;
        this.updateSendButton();
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: this.currentModel,
                    messages: chat.messages,
                    temperature: 0.7,
                    max_tokens: 4096
                })
            });
            
            // Remove typing indicator
            this.hideTypingIndicator();
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error?.message || 'API request failed');
            }
            
            const data = await response.json();
            const assistantMsg = {
                role: 'assistant',
                content: data.choices[0].message.content
            };
            
            chat.messages.push(assistantMsg);
            chat.updatedAt = new Date().toISOString();
            this.saveChats();
            
            this.renderMessages(chat.messages);
            
        } catch (error) {
            this.hideTypingIndicator();
            
            // Show error
            const container = document.getElementById('messages');
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = `Lỗi: ${error.message}`;
            container.appendChild(errorDiv);
            
            // Remove the failed user message
            chat.messages.pop();
            this.saveChats();
        } finally {
            this.isTyping = false;
            this.updateSendButton();
        }
    }

    showTypingIndicator() {
        const container = document.getElementById('messages');
        const div = document.createElement('div');
        div.className = 'message assistant';
        div.id = 'typing-indicator';
        div.innerHTML = `
            <div class="message-avatar">AI</div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        container.appendChild(div);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    updateSendButton() {
        const btn = document.getElementById('sendBtn');
        btn.disabled = this.isTyping;
    }

    scrollToBottom() {
        const container = document.getElementById('chatContainer');
        container.scrollTop = container.scrollHeight;
    }

    handleKeyDown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendMessage();
        }
    }

    changeModel(model) {
        this.currentModel = model;
        localStorage.setItem('model', model);
    }

    toggleSettings() {
        const modal = document.getElementById('settingsModal');
        modal.classList.toggle('active');
    }

    toggleSidebar() {
        document.getElementById('sidebar').classList.toggle('open');
    }

    saveSettings() {
        const apiKey = document.getElementById('apiKey').value.trim();
        this.apiKey = apiKey;
        localStorage.setItem('groqApiKey', apiKey);
        this.toggleSettings();
    }

    insertPrompt(text) {
        const input = document.getElementById('messageInput');
        input.value = text + input.value;
        input.focus();
        this.autoResize(input);
    }

    copyMessage(index) {
        const chat = this.chats.find(c => c.id === this.currentChatId);
        if (chat && chat.messages[index]) {
            navigator.clipboard.writeText(chat.messages[index].content);
            
            // Visual feedback
            const btn = document.querySelector(`#msg-${index} .message-action-btn`);
            const original = btn.innerHTML;
            btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            setTimeout(() => btn.innerHTML = original, 2000);
        }
    }

    async regenerateMessage(index) {
        const chat = this.chats.find(c => c.id === this.currentChatId);
        if (!chat || index < 1) return;
        
        // Remove the assistant message and retry
        chat.messages = chat.messages.slice(0, index);
        this.saveChats();
        this.renderMessages(chat.messages);
        
        // Resend
        await this.sendToAPI(chat);
    }

    exportChat() {
        const chat = this.chats.find(c => c.id === this.currentChatId);
        if (!chat || chat.messages.length === 0) {
            alert('Không có cuộc trò chuyện để xuất');
            return;
        }
        
        let content = `# ${chat.title}\n\n`;
        content += `Ngày: ${new Date(chat.createdAt).toLocaleString()}\n\n`;
        content += '---\n\n';
        
        chat.messages.forEach(msg => {
            content += `## ${msg.role === 'user' ? 'Bạn' : 'AI'}\n\n${msg.content}\n\n---\n\n`;
        });
        
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `chat-${chat.id}.md`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize
const chatApp = new ChatApp();
