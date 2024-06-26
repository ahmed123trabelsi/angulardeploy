import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../alldepartements/departement.service';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-departement',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    FileUploadComponent,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './add-departement.component.html',
  styleUrl: './add-departement.component.scss'
})
export class AddDepartementComponent {
  docForm: UntypedFormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: UntypedFormBuilder, private companyService: EmployeesService) {
    this.docForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      description: [''],
      totalEmployees: ['', [Validators.required]],
      vacantPositions: ['', [Validators.required]],
      recruitmentNeeds: ['', [Validators.required]],
      budgetAllocated: ['', [Validators.required]],
      salaryExpenditure: ['', [Validators.required]],
      trainingExpenditure: ['', [Validators.required]],

    });
  }
  cancel() {
    // Code à exécuter lorsque le bouton "Cancel" est cliqué
  }
  formatCurrency(input: HTMLInputElement) {
    const numericValue = input.value.replace(/\D/g, '');
    const formattedValue = '$' + numericValue;
    input.value = formattedValue;
  }
  
  onSubmit() {
    if (this.docForm.valid) {
      const companyData = this.docForm.value;
      this.companyService.addDepartement(companyData).subscribe(
        response => {
       
          // Réinitialisez le formulaire après l'ajout réussi
          this.docForm.reset();
          // Afficher une alerte avec SweetAlert
          Swal.fire({
            icon: 'success',
            title: 'Succès !',
            text: 'L\'entreprise a été ajoutée avec succès !',
          });
        },
        error => {
       
          // Afficher une alerte d'erreur avec SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Erreur !',
            text: 'Une erreur est survenue lors de l\'ajout de l\'entreprise.',
          });
        }
      );
    } else {
   
      // Afficher une alerte avec SweetAlert pour les données de formulaire invalides
      Swal.fire({
        icon: 'error',
        title: 'Erreur !',
        text: 'Veuillez remplir tous les champs correctement.',
      });
    }
}
}
