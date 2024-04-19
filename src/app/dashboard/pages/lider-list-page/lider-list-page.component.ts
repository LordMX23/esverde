import { Component, inject, OnInit } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { LiderResponse } from '../../interfaces/lider-response.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-lider-list-page',
  templateUrl: './lider-list-page.component.html',
  styles: ``
})
export class LiderListPageComponent implements OnInit{

  private structureService = inject( StructureService );
  public lideres: LiderResponse[] =  [];
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)


  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.structureService.getLider('1','11',id))
      ).subscribe( lider => {
        if( !lider ) return this.router.navigateByUrl('/');

        this.lideres = lider;
        return;
      });
  }

}
