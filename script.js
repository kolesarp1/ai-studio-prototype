document.addEventListener('DOMContentLoaded', () => {
    const newProjectForm = document.getElementById('new-project-form');
    const projectCreation = document.getElementById('project-creation');
    const projectDashboard = document.getElementById('project-dashboard');
    const projectInfo = document.getElementById('project-info');
    const uploadBtn = document.getElementById('upload-btn');
    const fileUpload = document.getElementById('file-upload');
    const uploadedFiles = document.getElementById('uploaded-files');
    const contextSummary = document.getElementById('context-summary');
    const summaryText = document.getElementById('summary-text');
    const generateBtn = document.getElementById('generate-btn');
    const preview = document.getElementById('preview');
    const slidesContainer = document.getElementById('slides-container');
    const downloadLink = document.getElementById('download-link');
    const editingSection = document.getElementById('editing-section');
    const submitEdit = document.getElementById('submit-edit');
    const editHistory = document.getElementById('edit-history');

    // Simulate local storage for projects
    let currentProject = null;

    // Flow 1: Create New Project
    newProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('project-name').value;
        const desc = document.getElementById('project-desc').value;
        currentProject = { name, desc, files: [], slides: [] };
        
        projectInfo.innerHTML = `<h3>${name}</h3><p>${desc}</p>`;
        projectCreation.classList.add('hidden');
        projectDashboard.classList.remove('hidden');
        
        // Simulate Grok 4 context processing (empty initially)
        contextSummary.classList.add('hidden');
    });

    // Document Upload
    uploadBtn.addEventListener('click', () => {
        const files = fileUpload.files;
        for (let file of files) {
            const li = document.createElement('li');
            li.textContent = file.name;
            uploadedFiles.appendChild(li);
            currentProject.files.push(file.name);
        }
        
        // Simulate context extraction
        summaryText.textContent = 'Mock summary: Key points extracted from uploaded docs (e.g., RFP details, keywords: roadmap, metrics).';
        contextSummary.classList.remove('hidden');
    });

    // Flow 2: Generate Presentation
    generateBtn.addEventListener('click', () => {
        const prompt = document.getElementById('prompt').value;
        const format = document.getElementById('format').value;
        
        // Mock AI generation: Create 3 placeholder slides with graphics
        slidesContainer.innerHTML = '';
        for (let i = 1; i <= 3; i++) {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            slide.innerHTML = `
                <p>Slide ${i}: ${prompt} content</p>
                <svg viewBox="0 0 100 50">
                    <rect x="10" y="10" width="20" height="30" fill="blue" />
                    <rect x="40" y="20" width="20" height="20" fill="green" />
                    <rect x="70" y="5" width="20" height="35" fill="red" />
                </svg>
                <p alt="Mock bar chart">Mock Graphic: Bar Chart</p>
            `;
            slidesContainer.appendChild(slide);
        }
        
        preview.classList.remove('hidden');
        editingSection.classList.remove('hidden');
        downloadLink.href = `data:text/plain;charset=utf-8,Mock ${format} file content`;
        downloadLink.download = `presentation.${format === 'pptx' ? 'pptx' : 'gsld'}`;
        downloadLink.textContent = `Download as ${format.toUpperCase()}`;
    });

    // Iterative Editing
    submitEdit.addEventListener('click', () => {
        const editPrompt = document.getElementById('edit-prompt').value;
        const log = document.createElement('div');
        log.textContent = `<p>AI Edit Request: ${editPrompt}</p><p>Mock Response: Updated slide with new graphic.</p>`;
        editHistory.appendChild(log);
        
        // Simulate change: Add a new mock slide
        const newSlide = document.createElement('div');
        newSlide.classList.add('slide');
        newSlide.innerHTML = `<p>Edited Slide: ${editPrompt}</p><svg><circle cx="50" cy="25" r="20" fill="orange"></svg><p alt="Mock circle diagram">New Graphic</p>`;
        slidesContainer.appendChild(newSlide);
    });
});
