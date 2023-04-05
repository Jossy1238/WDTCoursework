 <?

$host= "localhost";
$user= "id20564307_josephine";
$password= "]Gj2dY|/<(1W|flf";
$database = "id20564307_josephineapp";

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully <br />";
    }
   catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
   $query=$conn->prepare("INSERT INTO contacts (first, last, email, phone, message) VALUES
   (?,?,?,?,?)");

   $query->bindParam(1, $first);
   $query->bindParam(2, $last);
   $query->bindParam(3, $email);
   $query->bindParam(4, $phone);
   $query->bindParam(5, $message);

   $first=$_POST['first'];
   $last=$_POST['last'];
   $email=$_POST['email'];
   $phone=$_POST['phone'];
   $message=$_POST['message'];
   
   $query->execute();

   $conn = null;
   echo 'Hi '.$_POST['first'].' ' .$_POST['last'] .' thanks for your interest.</br>';
   echo 'We will contact you at '. $_POST['email'].' soon.</br>';
   ?>
