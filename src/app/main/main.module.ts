import { NgModule } from '@angular/core';

import { LoginModule } from 'app/main/authentication/login/login.module';
import { RegisterModule } from 'app/main/authentication/register/register.module';
import { ForgotPasswordModule } from 'app/main/authentication/forgot-password/forgot-password.module';
import { ResetPasswordModule } from 'app/main/authentication/reset-password/reset-password.module';
import { LockModule } from 'app/main/authentication/lock/lock.module';
import { MailConfirmModule } from 'app/main/authentication/mail-confirm/mail-confirm.module';
import { Error404Module } from 'app/main/errors/404/error-404.module';
import { Error500Module } from 'app/main/errors/500/error-500.module';

@NgModule({
    imports: [
        // Authentication
        LoginModule,
        RegisterModule,
        ForgotPasswordModule,
        ResetPasswordModule,
        LockModule,
        MailConfirmModule,

        // Errors
        Error404Module,
        Error500Module,
    ]
})
export class MainModule
{

}