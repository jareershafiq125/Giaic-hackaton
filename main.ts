document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    const resumeOutput = document.getElementById('resume-output');
    if (resumeOutput) {
        resumeOutput.innerHTML = `
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h4>Experience</h4>
            <p>${experience}</p>
            <h4>Education</h4>
            <p>${education}</p>
        `;
    }

    // Show the resume section
    const resume = document.getElementById('resume');
    if (resume) {
        resume.style.display = 'block';
    }
});
