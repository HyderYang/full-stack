"use strict";

var searchPage = {
  initPage: function initPage() {
    var self = this;
    self.list_temp_s = $(".search_list_temp .s_item").remove(); //一个短图

    self.list_temp_l = $(".search_list_temp .l_item").remove(); //一个长图

    self.list_temp_t = $(".search_list_temp .t_item").remove(); //两个短图

    self.list_temp_v = $(".search_list_temp .search_voice_item").remove(); //voice

    self.list_temp_se = $(".search_list_temp .search_services_item").remove(); //services

    var dataList = searchData.data.cases_list;
    var voiceList = searchData.data.voice_list;
    var servicesList = searchData.data.services_list;
    self.getList(self, dataList);
    self.getVoiceList(self, voiceList);
    self.getServicesList(self, servicesList);
  },
  //搜索结果--voice
  getVoiceList: function getVoiceList(self, o) {
    for (var i in o) {
      var list_dom_v = self.list_temp_v.clone();
      list_dom_v.find("a").text(o.title);
      list_dom_v.find("a").attr("href", "/?s=index/index/cases_detail&k=voice&id=" + o.id);
      list_dom_v.find("strong").text(o.cdate);
      $(".search_voice_list").append(list_dom_v);
    }
  },
  //搜索结果--service
  getServicesList: function getServicesList(self, o) {
    for (var i in o) {
      var list_dom_se = self.list_temp_se.clone();
      list_dom_se.find("a").text(o.title);
      list_dom_se.find("a").attr("href", "/?s=index/index/cases_detail&k=voice&id=" + o.id);
      $(".search_services_list").append(list_dom_se);
    }
  },
  //搜索结果--案例
  getList: function getList(self, o) {
    for (var i in o) {
      var kindArray = [];

      for (var j in o[i]) {
        for (var k in o[i][j]) {
          var item_kind = o[i][j][k].kind;
          kindArray.push(item_kind);
        }
      } //console.log(kindArray)


      var sumKind = eval(kindArray.join("+"));

      if (kindArray.length == 3 && sumKind == 0) {
        //三个短图
        for (var j in o[i]) {
          var list_dom_s = [];

          for (var k in o[i][j]) {
            list_dom_s.push(self.addSItem(self, o[i][j][k]));
          }

          $(".cases_list_index").append(list_dom_s);
        }
      } else if (kindArray.length == 3 && sumKind == 3) {
        //三个长图
        for (var j in o[i]) {
          var list_dom_l = [];

          for (var k in o[i][j]) {
            list_dom_l.push(self.addLItem(self, o[i][j][k]));
          }

          $(".cases_list_search").append(list_dom_l);
        }
      } else if (kindArray.length == 4 && sumKind == 2) {
        //两个短图两个长图
        for (var j in o[i]) {
          var list_dom_l = [];

          for (var k in o[i][j]) {
            //alert(k)
            if (o[i][j][k].kind == 0) {
              //短图
              list_dom_l.push(self.addTItem(self, o[i][j]));
              break;
            } else {
              list_dom_l.push(self.addLItem(self, o[i][j][k]));
            }
          }

          $(".cases_list_index").append(list_dom_l);
        }
      } else if (kindArray.length == 5 && sumKind == 1) {
        //4个短图1个长图
        for (var j in o[i]) {
          var list_dom_l = [];

          for (var k in o[i][j]) {
            //alert(k)
            if (o[i][j][k].kind == 0) {
              //短图
              list_dom_l.push(self.addTItem(self, o[i][j]));
              break;
            } else {
              list_dom_l.push(self.addLItem(self, o[i][j][k]));
            }
          }

          $(".cases_list_index").append(list_dom_l);
        }
      } else {
        for (var j in o[i]) {
          var list_dom_l = [];

          for (var k in o[i][j]) {
            //alert(k)
            if (o[i][j][k].kind == 0) {
              //短图		 											
              list_dom_l.push(self.addSItem(self, o[i][j][k]));
            } else {
              //长图
              list_dom_l.push(self.addLItem(self, o[i][j][k]));
            }
          }

          $(".cases_list_index").append(list_dom_l);
        }
      }
    }
  },
  //添加长图
  addLItem: function addLItem(self, o) {
    var list_dom_l_item = self.list_temp_l.clone();

    for (var i in o.cases_label) {
      list_dom_l_item.find(".cases_label").append('<a href="javascript:;" cid=' + o.cases_label[i].cid + '>' + o.cases_label[i].title + '</a>');
    }

    list_dom_l_item.find(".cases_top").attr("href", "/?s=index/index/cases_detail&id=" + o.id);
    list_dom_l_item.find(".cases_top img").attr("src", o.img_url);
    return list_dom_l_item;
  },
  //添加短图
  addSItem: function addSItem(self, o) {
    var list_dom_s_item = self.list_temp_s.clone();

    for (var i in o.cases_label) {
      list_dom_s_item.find(".cases_label").append('<a href="javascript:;" cid=' + o.cases_label[i].cid + '>' + o.cases_label[i].title + '</a>');
    }

    list_dom_s_item.find(".cases_top").attr("href", "/?s=index/index/cases_detail&id=" + o.id);
    list_dom_s_item.find(".cases_top img").attr("src", o.img_url);
    return list_dom_s_item;
  },
  addTItem: function addTItem(self, o) {
    var list_dom_t_item = self.list_temp_t.clone();

    for (var n in o[0].cases_label) {
      list_dom_t_item.find(".cases_item_cell").eq(0).find(".cases_label").append('<a href="javascript:;" cid=' + o[0].cases_label[n].cid + '>' + o[0].cases_label[n].title + '</a>');
    }

    list_dom_t_item.find(".cases_item_cell").eq(0).find(".cases_top").attr("href", "/?s=index/index/cases_detail&id=" + o[0].id);
    list_dom_t_item.find(".cases_item_cell").eq(0).find(".cases_top img").attr("src", o[0].img_url);

    for (var n in o[1].cases_label) {
      list_dom_t_item.find(".cases_item_cell").eq(1).find(".cases_label").append('<a href="javascript:;" cid=' + o[1].cases_label[n].cid + '>' + o[1].cases_label[n].title + '</a>');
    }

    list_dom_t_item.find(".cases_item_cell").eq(1).find(".cases_top").attr("href", "/?s=index/index/cases_detail&id=" + o[1].id);
    list_dom_t_item.find(".cases_item_cell").eq(1).find(".cases_top img").attr("src", o[1].img_url);
    return list_dom_t_item;
  }
};