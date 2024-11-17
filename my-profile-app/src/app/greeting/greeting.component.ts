import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  name: string = '';
  greetingMessage: string = '';

  ngOnInit() {
    console.log('ngOnInit: Компонент инициализирован.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Изменение входных данных:', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck: Проверка изменений.');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Внешний контент инициализирован.');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Проверка внешнего контента.');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: Вид компонента инициализирован.');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: Проверка вида компонента.');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Компонент уничтожен.');
  }

  sayHello() {
    this.greetingMessage = `Привет, ${this.name}!`;
  }
}