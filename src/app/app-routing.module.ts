import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { IntroductionComponent }   from './introduction/introduction.component';
import { InstallationComponent }   from './installation/installation.component';
import { ReleasesComponent }   from './releases/releases.component';
import { CliModuleComponent }   from './modules/cli.component';
import { CompressModuleComponent }   from './modules/compress.component';
import { ConfigModuleComponent }   from './modules/config.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      { path: '',
        pathMatch: 'full',
        redirectTo: 'introduction'
      },
      { path: 'introduction',
        component: IntroductionComponent
      },
      { path: 'installation',
        component: InstallationComponent
      },
      { path: 'releases/:name',
        component: ReleasesComponent
      },
      { path: 'commons-cli',
        component: CliModuleComponent,
      },
      { path: 'commons-compress',
        component: CompressModuleComponent,
      },
      { path: 'commons-config',
        component: ConfigModuleComponent,
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
