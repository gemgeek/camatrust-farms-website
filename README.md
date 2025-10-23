# CamaTrust Farms Website

![CamaTrust Farms Logo](public/logo.png) 

## 🚜 About The Project

This repository contains the code for the official website of CamaTrust Farms. It's a modern, responsive website built to showcase the farm's products, services, and commitment to sustainable agriculture. The site includes a full product catalog with e-commerce functionality (add to cart, checkout via email).

**Live Site:** [https://camatrustfarms.com](https://camatrustfarms.com) 

## ✨ Features

* **Responsive Design:** Looks great on desktops, tablets, and mobile phones.
* **Modern UI/UX:** Smooth animations, clean layout, and intuitive navigation.
* **Product Catalog:** Browse products by category (Meats, Poultry, Fish, Vegetables).
* **Individual Product Pages:** Detailed view with image, description, and quantity selection.
* **Shopping Cart:** Add/remove/update items.
* **Email Checkout:** Submitting the checkout form sends order details directly to the farm's email via Resend.
* **Project Showcase:** Highlights specific farm projects and initiatives.
* **Gallery:** Displays images and videos from the farm.

---

## 🛠️ Built With

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **Email Sending:** [Resend](https://resend.com/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or later recommended)
* npm or yarn

### Installation

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/gemgeek/camatrust-farms-website.git](https://github.com/gemgeek/camatrust-farms-website.git)
    ```
    *(Replace `gemgeek/camatrust-farms-website.git` with your actual GitHub repository URL)*
2.  **Navigate into the project folder:**
    ```bash
    cd camatrust-farms-website
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```
4.  **Set up Environment Variables:**
    * Create a file named `.env.local` in the root directory.
    * Add your Resend API key:
      ```.env.local
      RESEND_API_KEY=YOUR_RESEND_API_KEY
      ```
5.  **Run the development server:**
    ```bash
    npm run dev
    ```
6.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🌐 Deployment

This site is automatically deployed via [Vercel](https://vercel.com/) whenever changes are pushed to the `main` branch.

**Required Environment Variable on Vercel:**
* `RESEND_API_KEY`: Your Resend API key must be added in the Vercel project settings.

---