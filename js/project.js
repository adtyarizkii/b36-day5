let projects = [];


function addProject(){

    let projectName = document.getElementById("input-name").value;
    let startDate = new Date(document.getElementById("input-start-date").value);
    let endDate = new Date(document.getElementById("input-end-date").value);
    let projectDesc = document.getElementById("input-desc").value;
    let checkboxes = document.querySelectorAll('input[name="techno"]:checked');
    let image = document.getElementById("input-project-image").files[0];
    
    if (projectName == '') {
      return alert('Tolong isi nama project...');
    }
    let duration = "";

    if (startDate < endDate) {
      duration = new Date(endDate - startDate);
    } else {
      return duration = alert('Start Date harus sebelum End Date..');
    }

    let years = (duration.getFullYear() - 1970);
    let months = duration.getMonth();
    let days = duration.getDate();

    let yearTxt = "year";
    let monthTxt = "month";
    let dayTxt = "day";

    if (years > 1) yearTxt += "s";
    if (months > 1) monthTxt += "s";
    if (days > 1) dayTxt += "s";

    if (years >= 0) {
      duration = `Durasi: ${years} ${yearTxt} ${months} ${monthTxt} ${days} ${dayTxt}`;
    } else {
      return duration = alert('Isi Start Date dan End Date dengan benar..');
    }
      if (projectDesc == '') {
        return alert('Tolong isi deskripsi project...')
    }
    if (checkboxes.length == 0) {
      return alert('Pilih minimal 1 teknologi...')
    }
    if (image == null) {
      return alert('Tolong upload gambar project...')
    }
    
    image = URL.createObjectURL(image);
    
    
    let output = [];
    checkboxes.forEach((checkbox) => {
    output.push(checkbox.value);
    });

    let techIcon = "";
    output.forEach((output) => {
      techIcon += output;
    });
    
   alert('Project berhasil ditambah...')

    let project = {
    projectName: projectName,
    startDate: startDate,
    endDate: endDate,
    image: image,
    description: projectDesc,
    tech: techIcon,
    duration: duration,
  };

  projects.push(project);
  
  renderProject();
}

function renderProject() {
  let projectList = document.getElementById("project-list");

  projectList.innerHTML = "";
  
  // looping for each
  // projects.forEach((data) => {
  //   projectList.innerHTML += `<div class="grid-item" id="grid-item">
  //   <div>
  //   <a href="project-detail.html" target="_blank" style="text-decoration: none; color: black"><img src="${data.image}" alt="">
  //   <div class="title">
  //       <h2>${data.projectName}</a></h2>
  //       <p>${(data.duration)}</p>
  //   </div>
  //   <p>${data.description}</p>
  //   <div class="tech-icon">
  //   ${data.tech}
  //   </div>
  //   <div class="button">
  //       <button type="button" onclick="">edit</button>
  //       <button type="button" onclick="deleteProject()">delete</button>
  //   </div>
  // </div>`;
  // });

  // looping for(let i..)
  for (let i = 0; i < projects.length; i++) {
    projectList.innerHTML += `<div class="grid-item" id="grid-item">
    <div>
    <a href="project-detail.html" target="_blank" style="text-decoration: none; color: black"><img src="${projects[i].image}" alt="">
    <div class="title">
        <h2>${projects[i].projectName}</a></h2>
        <p>${projects[i].duration}</p>
    </div>
    <p>${projects[i].description}</p>
    <div class="tech-icon">
    ${projects[i].tech}
    </div>
    <div class="button">
        <button type="button" class="edit" onclick="">edit</button>
        <button type="button" class="delete" onclick="">delete</button>
    </div>
  </div>`;
  };

  const erase = document.querySelectorAll('.delete');

  erase.forEach(item => {
    item.onclick = () => {
      const itemText = item.parentElement.textContent.substr(1);
      const itemPos = projects.findIndex(item => item == itemText);

      projects.splice(itemPos, 1);
      alert('Delete success...')
      renderProject();
    }
  });
}

