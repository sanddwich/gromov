<?php
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] == 'GET' && realpath(__FILE__) == realpath($_SERVER['SCRIPT_FILENAME'])) {
    header('HTTP/1.0 403 Forbidden', TRUE, 403);
    die(header('location: /index.html'));
}




$body = json_decode(file_get_contents("php://input"));

$email = $body->email;
$phoneNumber = $body->phone;
$name = $body->name;
$pass = $body->pass;
$url = $body->url;
$siteURL = $body->siteURL;
$gromovMail = $body->gromovMail;

$textToLog = date('d-m-Y G:i:s') . ' - ' . $phoneNumber . ' - ' . $email . ' - ' . $name . PHP_EOL;

$gromovMessage = '<h3>Была приобретена программа на сайте <strong><a href="' . $siteURL . '" target="_blank">"GROMOV.TOP"</a></strong></h3>
<p>Информация по клиенту/продукту:</p>'.$textToLog;

$message = '<h3>Вами была приобретена программа на сайте <strong><a href="' . $siteURL . '" target="_blank">"GROMOV.TOP"</a></strong></h3>
<h4>Наименование программы: "' . $name . '"</h4>';

if ($url !== '') {
    $message = $message . '<p>Ссылка для скачивания программы: ' . $url . '</p><p>Пароль для скачиваемого архива: ' . $pass . '</p>';
}

// if (mb_strlen($tariff) > 3) {
//     $message = $message.'<h3 style="color:#9E001F;background-color:#E9E9A0;padding:20px;">Выбран тарифный план: '.$tariff.'</h3>';
// }

$mail_address = $email;
// $mail_address = 'bck-dkiselev@yandex.ru';
$title = 'Программа ' . date('d-m-Y G:i:s') . '!';
$gromovTitle = 'На вашем сайте была приобретена программа ' . date('d-m-Y G:i:s') . '!';
// Рассылка почты
require_once "./SendMailSmtpClass.php"; // подключаем класс

$mailSMTP = new SendMailSmtpClass('info@gromov.top', 'Fghjuy67890', 'ssl://mail.hostland.ru', 'Gromov Info', 465);
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
$headers .= "From: gromov.top Info <info@gromov.top>\r\n"; // от кого письмо


function mailToLog($text)
{
    $fileName = 'mail.log';

    if (!file_exists($fileName)) {
        $file = fopen($fileName, 'w');
        fclose($file);
    }

    $file = fopen($fileName, 'a');
    fwrite($file, $text);
    fclose($file);
}

try {

    //Письмо клиенту
    $result = $mailSMTP->send($mail_address, $title, $message, $headers);

    $gromovSend = $mailSMTP->send($gromovMail, $gromovTitle, $gromovMessage, $headers);

    if ($result === true) {
        $message = "Сообщение отправлено";
        mailToLog($textToLog);

        echo json_encode($message);
    } else {
        $message = "error";
        // echo $message;
        echo json_encode($message);
    }
} catch (Exception $e) {
    echo json_encode('Error: ' . $e);
    // echo 'Error: '.$e;
}
