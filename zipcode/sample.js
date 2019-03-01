$(function() {
  $('#btn').on('click', function() {
     //
    $.ajax({
      url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
      dataType : 'jsonp',
    }).done(function(data) {
      //console.log(data);
      setData(data.results[0]);
      if (data.results) {
        //
      } else {
        alert('該当するデータが見つかりませんでした');
      }
    }).fail(function(data) {
      alert('通信に失敗しました');
    });
  });

  function setData(data) {
    // 取得したデータをHTML要素に代入
    $('#prefecture').val(data.address1);
    $('#city').val(data.address2);
    $('#address').val(data.address3);
  }
});

