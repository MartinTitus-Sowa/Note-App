// important items needed
const form_input = document.getElementById('form_input');
const form_textArea = document.getElementById('form_textArea');
const form_btn = document.getElementById('form_btn');
const note_list = document.getElementById('note_list');
const close_modal = document.getElementById('close_modal');
const modal_wrapper = document.getElementById('modal_wrapper');


const mh = document.getElementById('mh');
const mc = document.getElementById('mc');

const allNotes = [];



// eventListener
// creating a note...
form_btn.addEventListener('click', addNote)

function addNote(e) {
    e.preventDefault()
    const fi = form_input.value;
    const ft = form_textArea.value;

    // return nothing if input box is empty
    if (form_input.value === '' || form_textArea.value === '') {
        return;
    }

    // creating note container
    const div = document.createElement('div');
    div.className = 'note';
    div.setAttribute('id', 'note');
    const divNCW = document.createElement('div');
    divNCW.setAttribute('class', 'note_content_wrapper');
    const optDiv = document.createElement('div');
    optDiv.setAttribute('class', 'controls');
    optDiv.setAttribute('id', 'controls');

    // creating view and delete btns
    const bttnV = document.createElement('button');
    bttnV.setAttribute('id', 'vieww_btn');
    bttnV.setAttribute('class', 'vieww_btn');
    bttnV.textContent = 'View Note';
    const bttnD = document.createElement('button');
    bttnD.setAttribute('id', 'delete_btn');
    bttnD.setAttribute('class', 'delete_btn');
    bttnD.textContent = 'Delete Note';

    // creating header and P
    const h = document.createElement('h3');
    h.setAttribute('class', 'note-head');
    h.textContent = fi;
    const p = document.createElement('p');
    p.setAttribute('class', 'note-content');
    p.textContent = ft;

    // NOTE - created
    divNCW.insertAdjacentElement('beforeend', h);
    divNCW.insertAdjacentElement('beforeend', p);
    div.insertAdjacentElement('beforeend', divNCW);
    optDiv.insertAdjacentElement('beforeend', bttnV);
    optDiv.insertAdjacentElement('beforeend', bttnD);
    div.insertAdjacentElement('beforeend', optDiv);

    note_list.insertAdjacentElement('afterbegin', div)
    form_input.value = '';
    form_textArea.value = '';
}




// open modal
document.addEventListener('click', open)


// closing modal
document.addEventListener('click', closeModal);

// deleting NOTE
document.addEventListener('click', delete_note);

function delete_note(e) {
    if (e.target.classList.contains('delete_btn')) {
        e.target.closest('#note').remove();
    }
};

function closeModal(e) {
    if (e.target.classList.contains('close_modal') || (e.target.classList.contains('modal_wrapper'))) {
        modal_wrapper.style.display = 'none';
    }
};

function open(e) {
    if (e.target.id === 'vieww_btn') {
        document.getElementById('modal_wrapper').style.display = 'flex';
        mh.textContent = e.target.closest('.note').childNodes[0].childNodes[0].outerText;
        mc.textContent = e.target.closest('.note').childNodes[0].childNodes[1].outerText;
    }
}