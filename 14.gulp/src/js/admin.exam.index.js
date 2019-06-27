var adminNewsIndex = {
	initPage() {
		var self = this;
		self.initDeleteBtn(self);
		self.initSelectBtn(self);
	}, 
	initDeleteBtn(self) {
		$('.delete').click(function(){
			var trDom = $(this).parents('tr');
			var id = trDom.attr('data-id');
			var data = {id: id};
			pop.confirm('Are you sure to delete the selected item?', function(){
				globalObj.ajax(baseURL + '?s=admin/exam/delete', data, function(res){
					if (res.code == 0) {
						trDom.remove();
						pop.closeAll();
					}
				});
			});
		});
	},
	initSelectBtn(self) {
		$("input[name='status']").bootstrapSwitch({
			onText: "有效",
			offText: "无效",
			onColor: "success",
			offColor: "danger",
			size: "mini",
			onSwitchChange: function(event, state) {
				event.preventDefault();
				var status = state ? 1 : 0;
				var data = {
					id: $(this).parents('tr').attr('data-id'),
					status: status,
				};
				$.ajax({
					type: "POST",
					url: baseURL + '?s=admin/exam/save',
					data: data,
					dataType: "json",
					success: function(res) {
						if(res.code == 0) {
							pop.msg("Modify success");
							return;
						}
					},
					error: function(XMLHttpRequest, textStatus, errorThrown) {
						pop.alert('页面故障，请联系管理员！<br>故障信息:<br>' + errorThrown);
					}
				});
			}
		});
	},
};

$(function(){
	adminNewsIndex.initPage();
});
