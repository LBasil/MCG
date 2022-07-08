function pauseAnim() {
    var s1 = document.getElementById("site1");
    s1.classList.add("pauseAnimation");
    var s2 = document.getElementById("site2");
    s2.classList.add("pauseAnimation");
    var s3 = document.getElementById("site3");
    s3.classList.add("pauseAnimation");
    var s4 = document.getElementById("site4");
    s4.classList.add("pauseAnimation");
}

function resumAnim() {
    var s1 = document.getElementById("site1");
    s1.classList.remove("pauseAnimation");
    var s2 = document.getElementById("site2");
    s2.classList.remove("pauseAnimation");
    var s3 = document.getElementById("site3");
    s3.classList.remove("pauseAnimation");
    var s4 = document.getElementById("site4");
    s4.classList.remove("pauseAnimation");
}

function showAll(value){
    showLogoPreview(value);
    showInfo(value);
}

function hideAll(value) {
    hideLogoPreview();
    hideInfo(value);
}

function showLogoPreview(value) {
    /* const site = document.getElementById(value); */
    const logoPreview = document.getElementById("logoPreview");
    switch (value) {
        case "site1":
            logoPreview.style.backgroundImage = `url("./images/fondMCG.png")`
            logoPreview.style.visibility = "visible";
            break;
        case "site2":
            logoPreview.style.backgroundImage = `url("./images/fondID.png")`
            logoPreview.style.visibility = "visible";
            break;
        case "site3":
            logoPreview.style.backgroundImage = `url("./images/fondID.png")`
            logoPreview.style.visibility = "visible";
            break;
        case "site4":
            logoPreview.style.backgroundImage = `url("./images/fondID.png")`
            logoPreview.style.visibility = "visible";
            break;
        default:
            break;
    }
}

function hideLogoPreview() {
    document.getElementById("logoPreview").style.visibility = "hidden";
}

function showInfo(value){
    switch (value) {
        case 'site1':
            document.getElementById("actionSite1").style.visibility = "visible";
        break;
        case 'site2':
            document.getElementById("actionSite2").style.visibility = "visible";
        break;
        case 'site3':
            document.getElementById("actionSite3").style.visibility = "visible";
        break;
        case 'site4':
            document.getElementById("actionSite4").style.visibility = "visible";
        break;
        default:
        break;
    }
}

function hideInfo(value){
    switch (value) {
        case 'site1':
            document.getElementById("actionSite1").style.visibility = "hidden";
        break;
        case 'site2':
            document.getElementById("actionSite2").style.visibility = "hidden";
        break;
        case 'site3':
            document.getElementById("actionSite3").style.visibility = "hidden";
        break;
        case 'site4':
            document.getElementById("actionSite4").style.visibility = "hidden";
        break;
        default:
        break;
    }
}



