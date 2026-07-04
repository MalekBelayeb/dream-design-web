<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$mailAddress = $_ENV['MAIL_ADDRESS'];

try {
    if (!empty($_POST['website'])) {
        // bot detected
        exit;
    }
    // =========================
    // INPUTS (SAFE + DEFAULTS)
    // =========================
    $firstname   = sanitizeInput($_POST['firstname'] ?? '');
    $lastname    = sanitizeInput($_POST['lastname'] ?? '');
    $phoneNumber = sanitizeInput($_POST['phoneNumber'] ?? '');
    $message     = sanitizeInput($_POST['message'] ?? '');
    $email       = sanitizeInput($_POST['email'] ?? '');
    $type        = sanitizeInput($_POST['type'] ?? '');

    // =========================
    // VALIDATION
    // =========================
    if (
        empty($firstname) ||
        empty($lastname) ||
        empty($phoneNumber) ||
        empty($message) ||
        empty($email)
    ) {
        header("Location: ./?error=missing_fields");
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ./?error=invalid_email");
        exit;
    }

    // =========================
    // SEND EMAILS
    // =========================
    sendContactMail($mailAddress, $firstname, $lastname, $email, $phoneNumber, $message, $type);
    sendConfirmationReceipt($mailAddress, $firstname, $email);

    header("Location: ./?success=1");
    exit;
} catch (Exception $e) {
    error_log($e->getMessage());
    header("Location: ./?error=server_error");
    exit;
}


// ======================================================
// SEND CONTACT EMAIL (TO YOU)
// ======================================================
function sendContactMail($mailAddress, $firstname, $lastname, $email, $phoneNumber, $message, $type)
{
    $mail = createMailerInstance($mailAddress);

    $mail->setFrom($mailAddress, 'Dream Design');
    $mail->addAddress($mailAddress);

    $mail->isHTML(true);
    $mail->Subject = "Nouvelle demande de contact";

    $mail->Body = "
<!DOCTYPE html>
<html lang='fr'>

<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
</head>

<body style='margin:0;padding:40px 20px;background:#FAFAFA;
font-family:Arial,Helvetica,sans-serif;color:#222;'>

<table width='100%' cellspacing='0' cellpadding='0'>
<tr>
<td align='center'>

<table
width='680'
cellpadding='0'
cellspacing='0'
style='max-width:680px;
background:#FFFFFF;
border:1px solid #E5E5E5;
border-radius:4px;
overflow:hidden;'>

    <!-- Header -->

    <tr>
        <td
        style='padding:45px 50px 35px;
        border-bottom:1px solid #F0F0F0;
        text-align:center;'>

            <div
            style='font-family:Georgia,serif;
            font-size:36px;
            color:#111111;
            letter-spacing:.03em;'>

                Dream Design

            </div>

            <div
            style='margin-top:10px;
            font-size:12px;
            letter-spacing:.28em;
            text-transform:uppercase;
            color:#888888;'>

                Nouvelle demande de contact

            </div>

        </td>
    </tr>

    <!-- Intro -->

    <tr>
        <td style='padding:45px 50px 20px;'>

            <h2
            style='margin:0;
            font-family:Georgia,serif;
            font-size:30px;
            font-weight:normal;
            color:#111111;'>

                Un nouveau client vous a contacté

            </h2>

            <p
            style='margin-top:18px;
            font-size:15px;
            line-height:1.8;
            color:#444;'>

                Une nouvelle demande a été envoyée depuis le formulaire
                de contact de votre site Internet.

            </p>

        </td>
    </tr>

    <!-- Client information -->

    <tr>
        <td style='padding:0 50px 40px;'>

            <table
            width='100%'
            cellpadding='16'
            cellspacing='0'
            style='border:1px solid #F0F0F0;
            border-collapse:collapse;'>

                <tr style='background:#FAFAFA;'>
                    <td width='35%'><strong>Nom</strong></td>
                    <td>$firstname $lastname</td>
                </tr>

                <tr>
                    <td><strong>Email</strong></td>
                    <td>
                        <a
                        href='mailto:$email'
                        style='color:#111111;
                        text-decoration:none;'>
                        $email
                        </a>
                    </td>
                </tr>

                <tr style='background:#FAFAFA;'>
                    <td><strong>Téléphone</strong></td>
                    <td>$phoneNumber</td>
                </tr>

                <tr>
                    <td><strong>Type de demande</strong></td>
                    <td>$type</td>
                </tr>

            </table>

        </td>
    </tr>

    <!-- Message -->

    <tr>
        <td style='padding:0 50px 50px;'>

            <div
            style='background:#FAFAFA;
            border:1px solid #F0F0F0;
            padding:28px;'>

                <div
                style='font-size:12px;
                color:#888888;
                text-transform:uppercase;
                letter-spacing:.2em;
                margin-bottom:15px;'>

                    Message

                </div>

                <div
                style='font-size:15px;
                line-height:1.9;
                color:#444;
                white-space:pre-line;'>

                    $message

                </div>

            </div>

        </td>
    </tr>

    <!-- CTA -->

    <tr>
        <td align='center'
        style='padding:0 50px 55px;'>

            <a
            href='mailto:$email'
            style='display:inline-block;
            background:#111111;
            color:#FFFFFF;
            text-decoration:none;
            padding:14px 32px;
            font-size:12px;
            letter-spacing:.18em;
            text-transform:uppercase;
            border-radius:4px;'>

                Répondre au client

            </a>

        </td>
    </tr>

    <!-- Footer -->

    <tr>

        <td
        style='padding:28px;
        text-align:center;
        border-top:1px solid #F0F0F0;
        color:#888888;
        font-size:13px;'>

            Cet email a été généré automatiquement depuis le formulaire de contact
            de <strong style='color:#111111;'>Dream Design</strong>.

        </td>

    </tr>

</table>

</td>
</tr>
</table>

</body>
</html>
";

    $mail->send();
}


// ======================================================
// SEND CONFIRMATION EMAIL (TO USER)
// ======================================================
function sendConfirmationReceipt($mailAddress, $firstname, $email)
{
    $mail = createMailerInstance($mailAddress);

    $mail->setFrom($mailAddress, 'Dream Design');
    $mail->addAddress($email);

    $mail->isHTML(true);
    $mail->Subject = "Nous avons bien reçu votre demande ";

    $mail->Body = "
<!DOCTYPE html>
<html lang='fr'>

<head>
<meta charset='UTF-8'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
</head>

<body style='margin:0;padding:40px 20px;background:#FAFAFA;
font-family:Arial,Helvetica,sans-serif;color:#222;'>

<table width='100%' cellspacing='0' cellpadding='0'>
<tr>
<td align='center'>

<table
width='680'
cellpadding='0'
cellspacing='0'
style='max-width:680px;
background:#FFFFFF;
border:1px solid #E5E5E5;
border-radius:4px;
overflow:hidden;'>

    <!-- Header -->

    <tr>
        <td
        style='padding:45px 50px 35px;
        border-bottom:1px solid #F0F0F0;
        text-align:center;'>

            <div
            style='font-family:Georgia,serif;
            font-size:36px;
            color:#111111;
            letter-spacing:.03em;'>

                Dream Design

            </div>

            <div
            style='margin-top:10px;
            font-size:12px;
            letter-spacing:.28em;
            text-transform:uppercase;
            color:#888888;'>

                Confirmation de votre demande

            </div>

        </td>
    </tr>

    <!-- Content -->

    <tr>
        <td style='padding:50px;'>

            <h2
            style='margin:0;
            font-family:Georgia,serif;
            font-size:30px;
            font-weight:normal;
            color:#111111;'>

                Bonjour $firstname,

            </h2>

            <p
            style='margin-top:24px;
            font-size:15px;
            line-height:1.9;
            color:#444;'>

                Nous vous remercions sincèrement d'avoir pris contact avec
                <strong>Dream Design</strong>.

            </p>

            <p
            style='margin-top:18px;
            font-size:15px;
            line-height:1.9;
            color:#444;'>

                Votre demande a bien été transmise à notre équipe.
                Nous reviendrons vers vous dans un délai maximal de
                <strong>24 heures</strong> afin d'échanger avec vous
                et de vous accompagner dans votre projet.

            </p>

            <div
            style='margin:35px 0;
            background:#FAFAFA;
            border:1px solid #F0F0F0;
            padding:28px;
            text-align:center;'>

                <div
                style='font-size:13px;
                letter-spacing:.18em;
                text-transform:uppercase;
                color:#888888;
                margin-bottom:10px;'>

                    Notre engagement

                </div>

                <div
                style='font-size:17px;
                line-height:1.8;
                color:#111111;'>

                    Une réponse personnalisée<br>
                    sous <strong>24 heures</strong>.

                </div>

            </div>

            <p
            style='font-size:15px;
            line-height:1.9;
            color:#444;'>

                En attendant, nous vous invitons à découvrir nos réalisations
                et nos différentes prestations sur notre site.

            </p>

        </td>
    </tr>

    <!-- CTA -->

    <tr>
        <td
        align='center'
        style='padding:0 50px 55px;'>

            <a
            href='https://dream-design.tn'
            style='display:inline-block;
            background:#111111;
            color:#FFFFFF;
            text-decoration:none;
            padding:14px 34px;
            border-radius:4px;
            font-size:12px;
            letter-spacing:.18em;
            text-transform:uppercase;'>

                Visiter notre site

            </a>

        </td>
    </tr>

    <!-- Footer -->

    <tr>

        <td
        style='padding:35px;
        border-top:1px solid #F0F0F0;
        text-align:center;
        color:#888888;
        font-size:13px;
        line-height:1.8;'>

            Merci pour votre confiance.<br><br>

            <strong style='color:#111111;font-size:15px;'>
                L'équipe Dream Design
            </strong>

        </td>

    </tr>

</table>

</td>
</tr>
</table>

</body>
</html>
";

    $mail->send();
}


// ======================================================
// SMTP CONFIG
// ======================================================
function createMailerInstance($mailAddress)
{
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $mailAddress;
    $mail->Password = $_ENV['MAIL_PASSWORD'];
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    return $mail;
}


// ======================================================
// SANITIZATION
// ======================================================
function sanitizeInput($input)
{
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    return $input;
}
