import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent {
  constructor() {}

  // Function to show the modal
  showModal() {
    const modalElement = document.getElementById('alertModal');
    if (modalElement) {
      modalElement.classList.add('show');
    }
  }

  // Function to hide the modal
  hideModal() {
    const modalElement = document.getElementById('alertModal');
    if (modalElement) {
      modalElement.classList.remove('show');
    }
  }
}
