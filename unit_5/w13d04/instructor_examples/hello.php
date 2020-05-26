<pre><?php
    //single line
    /*
    multi
    line
    */
    // $my_first_var;
    // $my_first_var = 2;
    // $my_first_var = 3;
    // echo $my_first_var;
    // $x = "my string";
    // var_dump($x);
    // $y = 654654;
    // $z = 10.654;
    // $a = true;
    // var_dump($y);
    // var_dump($z);
    // var_dump($a);

    // $cars = array('Volvo', 'BMW', 'Toyota');
    // var_dump($cars);
    // print_r($cars);

    // $x = null;
    // var_dump($x);

    // $first_part = 'first part';
    // $second_part = 'second part';
    // $concatenation = $first_part . " " . $second_part;
    // $concatenation .= ". appended value";
    // echo $concatenation;

    // echo 1 + 1;
    // echo 2 - 1;
    // echo 3 * 3;
    // echo 12 / 3;
    // echo 5 % 2;
    // echo 2 ** 3;

    // $foo = 1;
    // $foo++;
    // echo $foo;
    // $foo--;
    // echo $foo;

    // $my_var = 1;
    // $my_var += 2;
    // echo $my_var;
    // $my_var -= 4;
    // echo $my_var;
    // $my_var *= 5;
    // echo $my_var;
    // $my_var /= 2;
    // echo $my_var;

    // $my_var = 34;
    //
    // if($my_var === true){
    //     echo "it's true!";
    // } else if($my_var === false) {
    //     echo "it's false!";
    // } else {
    //     echo 'dunno';
    // }
?></pre>


<!-- <?php if(6 > 5 && false): ?>
    <b>it's true</b>
<?php else: ?>
    <em>it's not true</em>
<?php endif; ?> -->

<pre>
<?php
// $cars = array('Volvo', 'BMW', 'Toyota');
// $cars[4] = 'asdf';
// $cars[] = "appended value";
// print_r($cars);
// echo count($cars);

// $age = array("Peter" => 35, "Sally" => 37, "Zanthor" => "2001");
// $age["Bob"] = 105;
// // print_r($age);
// echo $age["Bob"];

// $matt = array("age" => 36, "eyes" => blue, weight => 150);
// print_r($matt);

// $x = 1;
// while($x <= 5){
//     echo "The num is: $x <br/>";
//     $x++;
// }
?>
</pre>

<!-- <ul>
    <?php for($x = 0; $x <= 5; $x++): ?>
        <li>The num is: <?= $x ?></li>
    <?php endfor; ?>
</ul> -->

<?php //$colors = array('red', 'green', 'blue', 'yellow'); ?>
<!-- <?php $ages = array("Peter" => 35, "Sally" => 37, "Zanthor" => "2001"); ?>
<ul>
    <?php foreach($ages as $index => $value): ?>
        <li><?=$index;?>:<?=$value;?></li>
    <?php endforeach; ?>
</ul> -->

<?php

// function writeMsg($person){
//     echo "hello " . $person . "!";
// }
//
// writeMsg('Matt');

// echo strlen("Hello world");
// echo "<br/>";
// echo str_word_count("Hello world");
// echo "<br/>";
// echo strrev("Hello world");
// echo "<br/>";
// echo strpos("Hello world world!", "world");
// echo "<br/>";
// echo strrpos("Hello world world!", "world");
// echo "<br/>";
// echo str_replace("world", "Dolly", "Hello world");
// echo "<br/>";

// echo substr("Hello world", 3);
// echo "<br/>";
// echo substr("Hello world", 3, 4);
?>
<pre>
<?php
    // $the_string = "Some sentence goes here";
    // $string_array = explode(" ", $the_string);
    // print_r($string_array);
?>

<?php
    // $my_array = array(5,12,4, 0, -1);
    // sort($my_array);
    // print_r($my_array);
    // rsort($my_array);
    // print_r($my_array);

    // $ages = array("Peter" => 35, "Sally" => 5, "Zanthor" => 2001);
    // asort($ages);
    // print_r($ages);
    // arsort($ages);
    // print_r($ages);
    // ksort($ages);
    // print_r($ages);
    // krsort($ages);
    // print_r($ages);
    class Car {
        static public $colors = array('Bronze', 'Yellow', 'Green');
        public $color;
        protected $wheels;
        private $engine_on = false;

        public function __construct($num_wheels){
            $this->wheels = $num_wheels;
        }

        public function getWheels(){
            return $this->wheels;
        }

        public function start(){
            $this->engine_on = true;
        }
    }
    class Humvee extends Car {
        protected $armour = 10;

        public function takeDamage($damage){
            $this->armour -= $damage;
        }

        public function loseWheel(){
            $this->wheels--;
        }

        public function start(){
            parent::start();
            echo "WELCOME TO THE JUNGLE!!!";
        }
    }
    $my_humvee = new Humvee(6);
    $my_humvee->color = Car::$colors[1];
    print_r($my_humvee);
    $my_humvee->loseWheel();
    print_r($my_humvee);
    $my_humvee->takeDamage(6);
    print_r($my_humvee);
    $my_humvee->start();
    print_r($my_humvee);
?>
</pre>
