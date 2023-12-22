import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import { DocumentationParam } from '../models/document-param.model';

@Directive({
  selector: '[appDocParams]'
})
export class DocumentationParamsDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @Input('appDocParams') set params(value: DocumentationParam[]) {
    if (value && value.length > 0) {
      if (!this.hasView) {
        const container = this.viewContainer.createEmbeddedView(this.templateRef);
        value.forEach(param => {
          if (param.isActive) {
            const p = document.createElement('p');
            p.textContent = param.description || '';
            p.style.color = param.color || 'black';
            p.style.backgroundColor = param.backgroundColor || 'transparent';
            p.style.fontSize = param.fontSize || 'inherit';
            const content = container.rootNodes[0].innerHTML;
            container.rootNodes[0].innerHTML = `${p.outerHTML}<div>${content}</div>`;
          }
        });
        const directiveDiv = document.createElement('small');
        directiveDiv.textContent = '';
        container.rootNodes[0].parentNode.insertBefore(directiveDiv, container.rootNodes[0]);
        this.hasView = true;
      }
    } else {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
