<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Big Ant Coaching - 1:1 Online Coaching</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <div class="header">
            <h1>Big Ant Coaching</h1>
            <p class="hero-text">1:1 Elite Physique Development</p>
            <div class="price-tag">$150 / month</div>
        </div>

        <div class="features-box">
            <h3>What's Included</h3>
            <ul>
                <li>Custom progressive overload training program tailored to your schedule and weak points.</li>
                <li>Personalized macro targets and nutrition guidelines so you can grow without starving.</li>
                <li>Weekly form reviews and check-ins to lock in your progress.</li>
                <li>Direct 24/7 chat access to me for questions, adjustments, and accountability.</li>
            </ul>
        </div>

        <form id="coachingForm" action="https://formspree.io/f/xnpqdaej" method="POST">
            
            <div class="form-group">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required>
            </div>

            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="name@example.com" required>
            </div>

            <div class="form-group">
                <label for="social">TikTok / Instagram Handle</label>
                <input type="text" id="social" name="social" placeholder="@yourhandle" required>
            </div>

            <div class="form-group">
                <label for="goal">What is your primary fitness goal?</label>
                <textarea id="goal" name="goal" placeholder="e.g., build lean mass, break strength plateaus, prep for a bulk" required></textarea>
            </div>

            <div id="error-message" class="error-msg"></div>

            <button type="submit" class="submit-btn">Submit Application</button>
        </form>
    </div>

    <script src="form-handler.js"></script>
</body>
</html>
