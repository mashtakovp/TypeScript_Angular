import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groupId: string | null = null;
  message: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.groupId = this.route.snapshot.paramMap.get('id');

    if (!this.groupId) {
      // Если параметр отсутствует, перенаправляем на приветствие
      this.router.navigate(['/greeting']);
    } else if (this.groupId !== '6131') {
      // Если группа не 6131, выводим сообщение
      this.message = 'Группа не найдена';
    }
  }
}