<?php
if(isset($_POST['email'])) {
     
    $email_to = "jejelarifle@gmail.com";
    $email_subject = "Nouveau message depuis le formulaire de contact de votre site web";
     
    function died($error) {
        // Messages d'erreur
        echo "Désolé, mais il y a des erreurs dans le formulaire que vous avez soumis. ";
        echo "Ces erreurs sont les suivantes :<br /><br />";
        echo $error."<br /><br />";
        echo "Merci de corriger ces erreurs.<br /><br />";
        die();
    }
     
    // validation des champs requis
    if(!isset($_POST['nom']) ||
        !isset($_POST['email']) ||
        !isset($_POST['objet']) ||
        !isset($_POST['message'])) {
        died('Désolé, mais il semble y avoir un problème avec le formulaire que vous avez soumis.');       
    }
     
    $nom = $_POST['nom']; // Champ requis
    $email_from = $_POST['email']; // Champ requis
    $objet = $_POST['objet']; // Champ requis
    $message = $_POST['message']; // Champ requis
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'L\'adresse email que vous avez saisie ne semble pas être valide.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$nom)) {
    $error_message .= 'Le nom que vous avez saisi ne semble pas être valide.<br />';
  }
  if(strlen($message) < 2) {
    $error_message .= 'Le message que vous avez saisi ne semble pas être valide.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Détails du formulaire ci-dessous.\n\n";
     
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Nom: ".clean_string($nom)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Objet: ".clean_string($objet)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
     
// En-têtes de l'email
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- Message de confirmation -->
 
Merci de m'avoir contacté. Je vous réponds dans les plus brefs délais.
 
<?php
}
?>
