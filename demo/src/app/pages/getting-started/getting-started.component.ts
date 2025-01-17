import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Snippet } from '../../services/snippet';
import { versions } from '../../../environments/versions';
import { NgbdPageHeaderComponent } from '../../shared/page-wrapper/page-header.component';
import { NgbdCodeComponent } from '../../shared/code/code.component';
import { NgbdPageWrapper } from '../../shared/page-wrapper/page-wrapper.component';
import { NgbAlertModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
	standalone: true,
	imports: [NgbdPageHeaderComponent, NgbdCodeComponent, NgbCollapseModule, NgbAlertModule, NgIf, NgbdPageWrapper],
	templateUrl: './getting-started.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GettingStartedPage {
	instructionsCollapsed = true;
	olderVersionsCollapsed = true;
	bsVersion = versions.bootstrap;

	schematics = Snippet({
		lang: 'bash',
		code: `ng add @ng-bootstrap/ng-bootstrap`,
	});

	schematicsProject = Snippet({
		lang: 'bash',
		code: `ng add @ng-bootstrap/ng-bootstrap --project myProject`,
	});

	bootstrapCss = Snippet({
		lang: 'css',
		code: `@import "~bootstrap/scss/bootstrap";`,
	});

	bootstrapCssAngularJson = Snippet({
		lang: 'typescript',
		code: `
      "yourApp": {
        "architect": {
          "build": {
            "options": {
              "styles": [
                "node_modules/bootstrap/dist/css/bootstrap.min.css"
              ]
            }
          }
        }
      }
    `,
	});

	bootstrapInstall = Snippet({
		lang: 'bash',
		code: `npm install bootstrap`,
	});

	codeInstall = Snippet({
		lang: 'bash',
		code: `npm install @ng-bootstrap/ng-bootstrap`,
	});

	popperInstall = Snippet({
		lang: 'bash',
		code: `npm install @popperjs/core`,
	});

	polyfillInstall = Snippet({
		lang: 'bash',
		code: `ng add @angular/localize`,
	});

	codeRoot = Snippet({
		lang: 'typescript',
		code: `
      import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

      @NgModule({
        imports: [NgbModule],
      })
      export class YourAppModule {
      }
    `,
	});

	codeOther = Snippet({
		lang: 'typescript',
		code: `
      import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

      @NgModule({
        imports: [NgbPaginationModule, NgbAlertModule],
      })
      export class YourAppModule {
      }
    `,
	});
}
