import $ from 'jquery';
export default function fileInput() {
	const $fileContainer = $('.footer__file'),
		$file = $fileContainer.find('#file'),
		$label = $file.next('label'),
		$labelText = $label.find('.file-input'),
		labelDefault = $labelText.text();

	// on file change
	$file.on('change', function (event) {
		var fileName = $file.val().split('\\').pop();
		if (fileName) {
			// console.log($file)
			$labelText.text(fileName);
			
		} else {
			$labelText.text(labelDefault);
		}
	});
}