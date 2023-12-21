import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface DocumentationParam {
  name: string;
  value: any;
  description?: string;
  isActive?: boolean;
  color?: string;
}

@Directive({
  selector: '[appDocParams]'
})
export class DocumentationParamsDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input('appDocParams') set params(value: DocumentationParam[]) {
    if (value && value.length > 0) {
      if (!this.hasView) {
        const container = this.viewContainer.createEmbeddedView(this.templateRef);
        value.forEach(param => {
          if (param.isActive) {
            const p = document.createElement('p');
            p.textContent = param.description || '';
            p.style.color = param.color || 'black'; // Default color: black
            const content = container.rootNodes[0].innerHTML;
            container.rootNodes[0].innerHTML = `${p.outerHTML}<div>${content}</div>`;
          }
        });
        const directiveDiv = document.createElement('small');
        directiveDiv.textContent = 'Bu bir directive\'dir';
        container.rootNodes[0].parentNode.insertBefore(directiveDiv, container.rootNodes[0]);
        this.hasView = true;
      }
    } else {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
