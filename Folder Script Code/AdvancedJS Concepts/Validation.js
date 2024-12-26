function validate(){
    let name = document.getElementById('fname').ariaValue
    let target_ele = document.getElementById('msg');
    if (name == ""){
        target_ele.textContent = 'fname should npot be empty';
        return false;
    }

    else if (name.length < 2){
        target_ele.textContent = 'Short Name!';
        return false;
    }
}