var $openBtn = $('#open-modal');
var $closeBtn = $('#close');

var $modal = $('#modal');

var openModal = function(){
  $modal.css({'display':'block'})
};
var closeModal = function(){
  $modal.css({'display': 'none'})
}

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);

setTimeout(openModal,5000)
