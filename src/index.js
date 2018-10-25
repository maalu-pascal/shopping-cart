import _ from 'lodash';
import { secretButton, secretParagraph } from '../src/dom-loader.js';
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Model {
    constructor(title = '', done = false) {
        this.done = done;
        this.title = title;
        this.ts = Date.now();
        this.id = `id-${this.ts}`;
    }

    update({ title = '', done = false }) {
        this.done = done;
        this.title = title;
    }
}

class Collection {
    constructor(data) {
        if (_.isArray(data)) {
            this.data = data.map(item => new Model(item));
        } else {
            this.data = new Model(data);
        }
    }

    create({ title = '', ts = Date.now() }) {
        this.title = title;
        this.ts = ts;
    }
    delete() { }
    update() { }
}

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();


function toggleSecretState() {
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton()
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function updateSecretParagraph() {
    if (showSecret) {
        secretParagraph.style.display = 'block';
        secretParagraph.appendChild(component());

    } else {
        secretParagraph.style.display = 'none';
    }
}

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}