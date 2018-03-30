			var elseCheckbox = document.getElementById('else-checkbox');
			var burgerCheckbox = document.getElementById('burger');
			var uhChbox = document.getElementById('uh-burger');
			var accountChbox = document.getElementById('account-list__checkbox');
			var varChbox = document.getElementById('bt1-checkbox');
			var cogChbox1 = document.getElementById('cog-ChBox-1');
			var zapChbox = document.getElementById('zapisey');
			var tbEnd = $('.table-end');

			function elseFun() {
				if (elseCheckbox.checked) {
					$('.else').css('display', 'block');
					$('.else-li').css('display', 'none');
				}
			}

			function zapFun() {
				if (zapCheckbox.checked) {
					$('.dataTables_length').css('display', 'block');
				}
				else {
					$('.dataTables_length').css('display', 'none');
				}
			}

			function mainFun() {
				if (burgerCheckbox.checked) {
					$('.mob-nav').css('display', 'block');
				}
				else {
					$('.mob-nav').css('display', 'none');
				}
			}

			function btnsFun() {
				if (uhChbox.checked) {
					$('.btns-mob').css('display', 'block');
				}
				else {
					$('.btns-mob').css('display', 'none');
				}
			}

			function accFun() {
				if (accountChbox.checked) {
					$('.icon-down').css('transform', 'transform: rotate(180deg)');
					$('.account-list').css('display', 'block');
				}
				else {
					$('label i.icon-down').css('transform', 'transform: rotate(180deg)');
					$('.account-list').css('display', 'none');
				}
			}


			function varFun() {
				if (varChbox.checked) {
					$('.btns-list').css('display', 'block');
				}
				else {
					$('.btns-list').css('display', 'none');
				}
			}

			$("#main-chb").on("change", function() {
			  $(".oth-check").prop("checked", this.checked);
			});
			function zapFun() {
				if (zapChbox.checked) {
					$('.dataTables_length').css('display', 'block');
				}
				else {
					$('.dataTables_length').css('display', 'none');
				}
			}

			// function chbFun() {
			// 	if (cogChbox1.checked) {
			// 		$('.table-end').addClass('checked-cog');
			// 	}
			// 	else {
			// 		$('.table-end').removeClass('class name');
			// 	}
			// }
			$.fn.dataTable.Responsive.breakpoints.push({
			    name: 'tablet-p',
			    width: 1000
			})

			$("#table").dataTable({
					"paging":   true,
	        "ordering": true,
	        "info":     true,
	        responsive: true,
					responsive: {
            details: {
                type: 'column'
            }
		        },
		        columnDefs: [ {
		            className: 'control',
		            orderable: false,
		            targets:   0
		        } ],
		        order: [ 1, 'asc' ],
	        colReorder: true,
					language: {
						"processing": "Подождите...",
						"search": "Поиск:",
						"lengthMenu": " _MENU_ ",
						"info": "Показано с _START_ до _END_ записей из _TOTAL_",
						"infoEmpty": "Записи с 0 до 0 из 0 записей",
						"infoFiltered": "(отфильтровано из _MAX_ записей)",
						"infoPostFix": "",
						"loadingRecords": "Загрузка записей...",
						"zeroRecords": "Записи отсутствуют.",
						"emptyTable": "В таблице отсутствуют данные",
						"paginate": {
						"first": "Первая",
						"previous": "<",
						"next": ">",
						"last": "Последняя"
						},
						"aria": {
						"sortAscending": ": активировать для сортировки столбца по возрастанию",
						"sortDescending": ": активировать для сортировки столбца по убыванию"
						}
					},
					"iDisplayLength": 10,
					"aLengthMenu": [[ 3, 10, 20, 50, 100 ,-1],[ 3, 10,20,50,100,"все"]],
					stateSave: true,
	        dom: 'Blfrtip',
	        buttons: [
	            'colvis'
	        ],
	        
			});

		
			// $(window).on('resize', function() {
			//     if ($(window).width() < 992) {
			//       $('.pr-fst').addClass('all');
			//     }
			// });