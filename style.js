* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: #111;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Loading Screen */
#loading {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#loading .logo {
  width: 120px;
  margin-bottom: 20px;
}

.loader {
  border: 5px solid #333;
  border-top: 5px solid #1db954;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hidden { display: none; }

/* Header */
header {
  padding: 15px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 20px;
  color: #1db954;
}

header input {
  padding: 8px;
  border-radius: 8px;
  border: none;
  outline: none;
  width: 200px;
}

/* Music Grid */
.music-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  padding: 20px;
}

.card {
  background: #222;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.card:hover { transform: scale(1.05); }

.card img {
  width: 100%;
  border-radius: 8px;
}

.card h3 {
  font-size: 14px;
  margin-top: 5px;
  color: #fff;
}

.card p {
  font-size: 12px;
  color: #bbb;
}

/* Player */
#player {
  position: fixed;
  bottom: 0; left: 0;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #333;
}

#player img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 10px;
}

#player .info {
  flex: 1;
}

#player h2 {
  font-size: 14px;
  color: #fff;
}

#player p {
  font-size: 12px;
  color: #aaa;
}

#playPause {
  background: #1db954;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
}
