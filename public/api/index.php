<?php
   if ( $_SERVER['REQUEST_METHOD']=='GET' && realpath(__FILE__) == realpath( $_SERVER['SCRIPT_FILENAME'] ) ) {
        header( 'HTTP/1.0 403 Forbidden', TRUE, 403 );
        die( header( 'location: /index.html' ) );
    }




$body = json_decode(file_get_contents("php://input"));

$email = $body->email;
$phoneNumber = $body->phone;
$name = $body->name;
$pass = $body->pass;
$url = $body->url;
$siteURL = $body->siteURL;

$message = '<h3>Вами была приобретена программа на сайте <strong><a href="'.$siteURL.'" target="_blank">"GROMOV.TOP"</a></strong></h3>
<h4>Наименование программы: "'.$name.'"</h4>';

if ($url !== '') {
    $message = $message.'<p>Ссылка для скачивания программы: '.$url.'</p><p>Пароль для скачиваемого архива: '.$pass.'</p>';
}

// if (mb_strlen($tariff) > 3) {
//     $message = $message.'<h3 style="color:#9E001F;background-color:#E9E9A0;padding:20px;">Выбран тарифный план: '.$tariff.'</h3>';
// }

$mail_address = $email;
// $mail_address = 'bck-dkiselev@yandex.ru';
$title = 'Программа ' . date('d-m-Y G:i:s') .'!';
// Рассылка почты
require_once "./SendMailSmtpClass.php"; // подключаем класс

$mailSMTP = new SendMailSmtpClass('info@gromov.top', 'Fghjuy67890', 'ssl://mail.hostland.ru', 'Gromov Info', 465);
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
$headers .= "From: gromov.top Info <info@gromov.top>\r\n"; // от кого письмо

try{

    $result = $mailSMTP->send($mail_address, $title, $message, $headers);
    // echo json_encode($result);

    if($result === true){
        $message = "Сообщение отправлено";
        // echo $message;
        echo json_encode($message);
    } else {
        $message = "error";
        // echo $message;
        echo json_encode($message);
    }
}
    catch(Exception $e){
    echo json_encode('Error: '.$e);
    // echo 'Error: '.$e;
}




?>