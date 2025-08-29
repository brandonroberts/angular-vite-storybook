import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button.component';
import type { User } from './user';

@Component({
  selector: 'storybook-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `<header>
    <div class="storybook-header">
      <div>
        <img src="/angular-gradient.png" width="24px" height="24px"/> 
        <h1>Acme</h1>
      </div>
      <div>
        <div *ngIf="user">
          <span class="welcome">
            Welcome, <b>{{ user.name }}</b
            >!
          </span>
          <storybook-button
            *ngIf="user"
            size="small"
            (onClick)="onLogout.emit($event)"
            label="Log out"
          ></storybook-button>
        </div>
        <div *ngIf="!user">
          <storybook-button
            *ngIf="!user"
            size="small"
            class="margin-left"
            (onClick)="onLogin.emit($event)"
            label="Log in"
          ></storybook-button>
          <storybook-button
            *ngIf="!user"
            size="small"
            [primary]="true"
            class="margin-left"
            (onClick)="onCreateAccount.emit($event)"
            label="Sign up"
          ></storybook-button>
        </div>
      </div>
    </div>
  </header>`,
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
