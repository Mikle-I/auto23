<?php

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'pochta@yandex.ru'; //Ваша почта
$subject = 'Форма обратной связи site.com';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: ". $fromName ." \r\n";

// сохранение данных заявки в файл
if (strlen($phone) > 0 ) {
    $body= (strlen($name) > 0 )? "----------\nЗаявка \nИмя:$name\nТелефон: $phone \n": "----------\nЗаявка \n Телефон: $phone \n";
    $file = fopen('BAZA.txt', 'a+');
    fputs($file,$body);
    fclose($file);
}



// Содержимое письма

// сообщение будет отправлено в случае, если поле с номером телефона не пустое и нет имя
if (strlen($phone) > 0 && strlen($name)==0 ) {
    $body = "Получено письмо с сайта \nТелефон: $phone";
$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
}
// сообщение будет отправлено в случае, если поле с номером телефона не пустое
if (strlen($phone) > 0 && strlen($name)>0 ) {
    $body = "Получено письмо с сайта \nИмя: $name \nТелефон: $phone";
    $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
    }

?>
