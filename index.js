// Função para alternar a visibilidade do formulário
function toggleForm(formId) {
    const form = document.getElementById(formId);
    const forms = document.querySelectorAll('.form');
    
    // Esconde todos os formulários
    forms.forEach(f => f.style.display = 'none');
    
    // Exibe o formulário selecionado
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Função para criar um novo tópico
function createTopic(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const title = document.getElementById('topicTitle').value;
    const content = document.getElementById('topicContent').value;

    if (title && content) {
        // Adiciona o novo tópico na seção de tópicos
        const topicList = document.getElementById('forumTopics');
        const newTopic = document.createElement('div');
        newTopic.classList.add('topic');
        newTopic.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        topicList.appendChild(newTopic);

        // Limpa os campos do formulário
        document.getElementById('createTopicForm').reset();

        // Fecha o formulário após criação
        toggleForm('newTopicForm');
        console.log('Tópico Criado:', title, content);
    } else {
        alert('Por favor, preencha todos os campos do formulário.');
    }
}

// Função para criar uma nova conta
function createAccount(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        // Mensagem de sucesso
        console.log('Conta Criada:', username, email);

        // Limpa os campos do formulário
        document.getElementById('createAccountForm').reset();

        // Fecha o formulário após a criação da conta
        toggleForm('registerForm');
        alert('Conta criada com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
