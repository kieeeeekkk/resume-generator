
/**
 * Dynamically adds a single new textarea field.
 * @param {string} containerId - The ID of the container element.
 * @param {string} className - The class name for the new input.
 */
function addNewSimpleField(containerId, className) {
    const container = document.getElementById(containerId);
    const newNode = document.createElement('input');
    newNode.type = 'text';
    newNode.className = `form-control ${className} w-full mt-2`;
    newNode.placeholder = 'Skill (e.g., Lorem ipsum dolor)';
    container.appendChild(newNode);
}

/**
 * Adds a new set of fields for Education.
 */
function addNewEducationField() {
    const container = document.getElementById('aq');
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-2 mt-2';

    const majorInput = document.createElement('input');
    majorInput.type = 'text';
    majorInput.placeholder = 'Major (e.g., Enter Your Major)';
    majorInput.className = 'form-control eqMajorField w-full';

    const institutionInput = document.createElement('input');
    institutionInput.type = 'text';
    institutionInput.placeholder = 'Institution (e.g., Name of Institution)';
    institutionInput.className = 'form-control eqInstitutionField w-full';

    const yearsInput = document.createElement('input');
    yearsInput.type = 'text';
    yearsInput.placeholder = 'Years (e.g., 2012-2016)';
    yearsInput.className = 'form-control eqYearsField w-full';

    wrapper.appendChild(majorInput);
    wrapper.appendChild(institutionInput);
    wrapper.appendChild(yearsInput);
    container.appendChild(wrapper);
}

/**
 * Adds a new set of fields for Work Experience.
 */
function addNewWorkExperienceField() {
    const container = document.getElementById('we');
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-2 mt-2';

    const companyYearsInput = document.createElement('input');
    companyYearsInput.type = 'text';
    companyYearsInput.placeholder = 'Company Name | Years (e.g., Company Name Here | 2020 - present)';
    companyYearsInput.className = 'form-control weCompanyYearsField w-full';

    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.placeholder = 'Job Position (e.g., Job Position)';
    positionInput.className = 'form-control wePositionField w-full';

    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.rows = 3;
    descriptionTextarea.placeholder = 'Describe your responsibilities and achievements.';
    descriptionTextarea.className = 'form-control weDescriptionField w-full';

    wrapper.appendChild(companyYearsInput);
    wrapper.appendChild(positionInput);
    wrapper.appendChild(descriptionTextarea);
    container.appendChild(wrapper);
}

/**
 * Adds a new set of fields for References.
 */
function addNewReferenceField() {
    const container = document.getElementById('ref');
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-2 mt-2';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Reference Name (e.g., Pauline Greene)';
    nameInput.className = 'form-control refNameField w-full';

    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.placeholder = 'Job Position (e.g., Job Position)';
    positionInput.className = 'form-control refPositionField w-full';

    const contactInput = document.createElement('input');
    contactInput.type = 'text';
    contactInput.placeholder = 'Contact Number (e.g., P: 0110 456 789)';
    contactInput.className = 'form-control refContactField w-full';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email (e.g., M: name@email.com)';
    emailInput.className = 'form-control refEmailField w-full';

    wrapper.appendChild(nameInput);
    wrapper.appendChild(positionInput);
    wrapper.appendChild(contactInput);
    wrapper.appendChild(emailInput);
    container.appendChild(wrapper);
}

/**
 * Gathers all data from the form fields and populates the CV template.
 */
function generateCV() {
    // Populate Personal Info
    document.getElementById('nameT').innerText = document.getElementById('nameField').value || 'GRACE SWINDERSKI';
    document.getElementById('titleT').innerText = document.getElementById('titleField').value || 'PROFESSIONAL TITLE';

    // Populate Contact Info in the left column
    document.querySelector('#contactT span:last-child').innerText = document.getElementById('contactField').value || '0110 456 789';
    document.querySelector('#emailT span:last-child').innerText = document.getElementById('emailField').value || 'name@email.com';
    document.querySelector('#linkedinT span:last-child').innerText = document.getElementById('linkedinField').value || 'Linkedin Username';

    // Populate About Me
    document.getElementById('objectiveT').innerText = document.getElementById('objectiveField').value || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    // Populate Skills (as simple bullet points)
    const skillFields = document.getElementsByClassName('skillsField');
    let skillsHTML = "";
    for (let field of skillFields) {
        if (field.value.trim() !== "") {
            skillsHTML += `<li>${field.value}</li>`;
        }
    }
    document.getElementById('skillsT').innerHTML = skillsHTML || `
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
        <li>Lorem ipsum dolor</li>
    `;

    // Populate Education
    const eqMajorFields = document.getElementsByClassName('eqMajorField');
    const eqInstitutionFields = document.getElementsByClassName('eqInstitutionField');
    const eqYearsFields = document.getElementsByClassName('eqYearsField');
    let aqHTML = "";
    for (let i = 0; i < eqMajorFields.length; i++) {
        const major = eqMajorFields[i].value;
        const institution = eqInstitutionFields[i].value;
        const years = eqYearsFields[i].value;
        if (major.trim() !== "" && institution.trim() !== "" && years.trim() !== "") {
            aqHTML += `<p>${major}<br>${institution}<br>${years}</p>`;
        }
    }
    document.getElementById('aqT').innerHTML = aqHTML || `
        <p>Enter Your Major<br>Name of Institution<br>2012-2016</p>
        <p>Enter Your Major<br>Name of Institution<br>2010-2012</p>
    `;

    // Populate Work Experience
    const weCompanyYearsFields = document.getElementsByClassName('weCompanyYearsField');
    const wePositionFields = document.getElementsByClassName('wePositionField');
    const weDescriptionFields = document.getElementsByClassName('weDescriptionField');
    let weHTML = "";
    for (let i = 0; i < weCompanyYearsFields.length; i++) {
        const companyYears = weCompanyYearsFields[i].value;
        const position = wePositionFields[i].value;
        const description = weDescriptionFields[i].value;
        if (companyYears.trim() !== "" && position.trim() !== "" && description.trim() !== "") {
            weHTML += `
                <div>
                    <h3 class="font-semibold text-gray-700">${companyYears}</h3>
                    <p class="text-gray-600 mb-1">${position}</p>
                    <p class="text-sm text-gray-600">${description.replace(/\n/g, '<br>')}</p>
                </div>
            `;
        }
    }
    document.getElementById('weT').innerHTML = weHTML || `
        <div>
            <h3 class="font-semibold text-gray-700">Company Name Here | 2020 - present</h3>
            <p class="text-gray-600 mb-1">Job Position</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
            <h3 class="font-semibold text-gray-700">Company Name Here | 2017 - 2020</h3>
            <p class="text-gray-600 mb-1">Job Position</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div>
            <h3 class="font-semibold text-gray-700">Company Name Here | 2013 - 2017</h3>
            <p class="text-gray-600 mb-1">Job Position</p>
            <p class="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    `;

    // Populate References
    const refNameFields = document.getElementsByClassName('refNameField');
    const refPositionFields = document.getElementsByClassName('refPositionField');
    const refContactFields = document.getElementsByClassName('refContactField');
    const refEmailFields = document.getElementsByClassName('refEmailField');
    let refHTML = "";
    for (let i = 0; i < refNameFields.length; i++) {
        const name = refNameFields[i].value;
        const position = refPositionFields[i].value;
        const contact = refContactFields[i].value;
        const email = refEmailFields[i].value;
        if (name.trim() !== "") {
            refHTML += `
                <div>
                    <p class="font-semibold text-gray-700">${name}</p>
                    <p>${position}</p>
                    <p>${contact}</p>
                    <p>${email}</p>
                </div>
            `;
        }
    }
    document.getElementById('refT').innerHTML = refHTML || `
        <div>
            <p class="font-semibold text-gray-700">Pauline Greene</p>
            <p>Job Position</p>
            <p>P: 0110 456 789</p>
            <p>M: name@email.com</p>
        </div>
        <div>
            <p class="font-semibold text-gray-700">Philip Edwards</p>
            <p>Job Position</p>
            <p>P: 0110 456 789</p>
            <p>M: name@email.com</p>
        </div>
    `;

    // Handle the profile image upload
    let file = document.getElementById("imgField").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            document.getElementById("imgTemplate").src = reader.result;
        };
    } else {
         document.getElementById("imgTemplate").src = "https://placehold.co/150x150/E2E8F0/4A5568?text=Photo"; // Default image
    }

    // Switch from the form view to the CV template view
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

/**
 * Downloads the generated CV template as a PDF file.
 */
function downloadCV() {
  const cvTemplate = document.getElementById('cv-template');
  const downloadBtn = document.querySelector('button[onclick="downloadCV()"]');
  const cvForm = document.getElementById('cv-form');

  if (!cvTemplate || !downloadBtn) return;

  // Save current display states and styles
  const prevCvTemplateDisplay = cvTemplate.style.display;
  const prevCvFormDisplay = cvForm ? cvForm.style.display : '';
  const prevFlexDirection = cvTemplate.style.flexDirection;
  const leftColumn = cvTemplate.querySelector('.left-column');
  const rightColumn = cvTemplate.querySelector('.right-column');
  const prevLeftWidth = leftColumn ? leftColumn.style.width : '';
  const prevRightWidth = rightColumn ? rightColumn.style.width : '';

  // Force desktop layout for PDF
  cvTemplate.style.display = 'block';
  cvTemplate.style.flexDirection = 'row';
  if (leftColumn) leftColumn.style.width = '33.3333%';
  if (rightColumn) rightColumn.style.width = '66.6667%';
  if (cvForm) cvForm.style.display = 'none';
  downloadBtn.style.display = 'none';

  window.scrollTo(0, 0);

  setTimeout(() => {
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'pt', format: [794, 1123], orientation: 'portrait' }
    };

    html2pdf().set(opt).from(cvTemplate).save().then(() => {
      // Restore previous display states and styles
      cvTemplate.style.display = prevCvTemplateDisplay;
      cvTemplate.style.flexDirection = prevFlexDirection;
      if (leftColumn) leftColumn.style.width = prevLeftWidth;
      if (rightColumn) rightColumn.style.width = prevRightWidth;
      if (cvForm) cvForm.style.display = prevCvFormDisplay;
      downloadBtn.style.display = 'block';
    });
  }, 100);
}

function generateAndDownloadCV() {
  generateCV();
  // Wait for DOM update and image load if any, then download
  setTimeout(downloadCV, 300);

}