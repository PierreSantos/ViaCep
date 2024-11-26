import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BuscarEnderecoService } from './buscar-endereco.service';
import { Viacep } from './model/Viacep';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar-endereco',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule, // Importante para Reactive Forms
    HttpClientModule,
  ],
  templateUrl: './buscar-endereco.component.html',
  styleUrls: ['./buscar-endereco.component.scss'],
})
export class BuscarEnderecoComponent {
  public endereco?: Viacep;

  // Formulário tipado com Typed Forms
  protected form = inject(FormBuilder).group({
    cep: ['', [Validators.required, Validators.minLength(8)]], // Control não-nulo
  });

  constructor(private service: BuscarEnderecoService) {}

  // Buscar CEP baseado no formulário
  public buscarCep(): void {
    if (this.form.valid) {
      const cep = this.form.get('cep')!.value!;
      this.service.buscarCEP(cep).subscribe((res) => {
        this.endereco = res;
        if (res.erro) {
          alert('CEP não encontrado');
          this.limparFormulario();
          return;
        }
        this.atualizarFormulario(res);
      });
    }
  }

  private atualizarFormulario(data: Viacep): void {
    this.form.patchValue({
      cep: data.cep,
    });
  }

  public limparFormulario(): void {
    this.form.reset();
    this.endereco = undefined;
  }
}
