// import logo from './logo.svg';
import './App.css';
import Profile from './profileCard';

function App() {
  const imgOne = `${process.env.PUBLIC_URL}/images/imgCardOne.jpeg`;
  const imgTwo = `${process.env.PUBLIC_URL}/images/imgCardTwo.jpeg`;
  const imgThree = `${process.env.PUBLIC_URL}/images/imgCardThree.jpeg`;
  const imgFour = `${process.env.PUBLIC_URL}/images/imgCardFour.jpeg`;
  const imgFive = `${process.env.PUBLIC_URL}/images/imgCardFive.jpeg`;
  const imgSix = `${process.env.PUBLIC_URL}/images/imgCardSix.jpeg`;
  const imgSeven = `${process.env.PUBLIC_URL}/images/imgCardSeven.jpeg`;
  const imgEight = `${process.env.PUBLIC_URL}/images/imgCardEight.jpeg`;
  const imgNine = `${process.env.PUBLIC_URL}/images/imgCardNine.jpeg`;
  const imgTen = `${process.env.PUBLIC_URL}/images/imgCardTen.jpeg`;

  return (
    <>
      <div className='container-fluid p-4'>
        <div className='container p-1'>
          <center className='headTag'>PROFILES</center>
        </div>
        <ul className='itemLists'>
          <Profile img={imgOne} name='Larry Ellison' email='larry343ellison@official.com' contact='+63 791 675 8914' link='#' />
          <Profile img={imgTwo} name='Steve Jobs' email='stevejo555bs@official.com' contact='+7 813 117 7139' link='#' />
          <Profile img={imgThree} name='Steve Ballmer' email='ballmer747steve@official.com' contact='+63 739 292 7942' link='#' />
          <Profile img={imgFour} name='Sam Palmisano' email='sampalmisano40@official.com' contact='+86 461 145 4186' link='#' />
          <Profile img={imgFive} name='Marissa Mayer' email='6667mayer001marrissa@official.com' contact='+372 285 771 1911' link='#' />
          <Profile img={imgSix} name='Joe Tucci' email='joetucci1785@official.com' contact='+351 527 735 3642' link='#' />
          <Profile img={imgSeven} name='Mark Hurd' email='mar8896hurdk@official.com' contact='+62 640 802 7111' link='#' />
          <Profile img={imgEight} name='John Chambers' email='johnchambers2233@official.com' contact='+86 946 297 2275' link='#' />
          <Profile img={imgNine} name='John Johnson' email='johnjohnson1121@official.com' contact='+86 356 590 9727' link='#' />
          <Profile img={imgTen} name='Linus Torvalds' email='linustorvalds4408@official.com' contact='+60 184 408 0824' link='#' />
        </ul>
      </div>
    </>
  );
}

export default App;

