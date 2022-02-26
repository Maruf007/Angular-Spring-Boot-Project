import { Component, Directive, Injectable, Input, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/core/service/loader.service';

@Component({
  selector: 'ui-block',
  templateUrl: 'ui-block.component.html',
  styleUrls: ['ui-block.component.css']
})

export class UIBlockComponent implements OnInit{

  blockUI: boolean;

  constructor(private loaderService: LoaderService) { 
    this.loaderService.isLoading.subscribe((blockUI) => {
      this.blockUI = blockUI;
    });
  }

  ngOnInit() {
    
  }
}