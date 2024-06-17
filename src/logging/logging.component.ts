import { Component } from '@angular/core';
import { LogService } from '../services/log.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logging',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './logging.component.html',
  styleUrl: './logging.component.css'
})
export class LoggingComponent {

  constructor(public logService: LogService){ }
}
