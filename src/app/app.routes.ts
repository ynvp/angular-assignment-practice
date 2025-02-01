import { Routes } from '@angular/router';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Assignment8Component } from './components/assignment8/assignment8.component';
import { ProductsComponent } from './components/products/products.component';
import { Assignment90Component } from './components/assignment90/assignment90.component';
import { EmployeeDetailsComponent } from './components/assignment90/employee-details/employee-details.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { PermanentComponent } from './components/careers/permanent/permanent.component';
import { ContractComponent } from './components/careers/contract/contract.component';
import { adminGuard } from './guards/admin.guard';
import { hasChangesGuard } from './guards/has-changes.guard';
import { productDetailsResolver } from './resolvers/product-details.resolver';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    {
        path: 'careers',
        component: CareersComponent,
        children: [
            { path: 'permanent', component: PermanentComponent },
            { path: 'contract', component: ContractComponent },
        ],
    },
    {
        path: 'contactUs',
        component: ContactUsComponent,
        canDeactivate: [hasChangesGuard],
    },
    { path: 'employees', component: Assignment90Component },
    { path: 'employeeDetails/:id', component: EmployeeDetailsComponent },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [adminGuard],
    },
    {
        path: 'productDetails',
        component: ProductDetailsComponent,
        resolve: { product: productDetailsResolver },
    },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent },
];
