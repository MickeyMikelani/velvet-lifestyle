import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Header with Navigation */}
      <header>
        <nav>
          <ul>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/account">My Account</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <h1>Welcome to Velvet Lifestyle</h1>
        <p>This is the homepage of your luxury candle store.</p>
      </main>

      {/* Footer Section */}
      <footer>
        <p>Download our app on the App Store and Google Play for exclusive offers and updates!</p>
        <p>Follow us on social media for the latest in luxury home fragrances.</p>
      </footer>
    </div>
  );
};

export default Home;
