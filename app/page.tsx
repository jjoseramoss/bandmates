"use client"; // Required for using React in Next.js 13+
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about');
  };

  const routeToSetlist = () => {
    router.push('/setlist');
  }

  return (
    <div data-theme="forest" className="flex flex-col min-h-screen bg-base-100">
      <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-secondary text-xl">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="45"
                height="45" viewBox="0 0 122.88 64.97">
              <defs>
                <style>{`.cls-1{fill-rule:evenodd;}`}</style>
              </defs>
              <title>friends-group</title>
              <path className="cls-1" d="M16.59,25.38c-5,.21-10.13,4.52-13.16,10.93A26.58,26.58,0,0,0,.88,46.92a80.56,80.56,0,0,0-.88,12c1,6.16,8.79,4.34,9.46,0l.95-12.42a13.68,13.68,0,0,1,1-4.93,8.18,8.18,0,0,1,1.29-2.15l.46,22.69L12.93,64H34.42l-.29-2.11.42-25a16.82,16.82,0,0,1,5.88-1.36q-.24.47-.48,1a27.81,27.81,0,0,0-2.67,11.14,84.62,84.62,0,0,0-.93,12.62c1,6.47,9.23,4.56,9.93,0l1-13A14.38,14.38,0,0,1,48.36,42a9,9,0,0,1,1.36-2.26l.49,22.63-.33,2.32H72.54l-.35-2.55.35-19.31v.4l.08-3.49A9.33,9.33,0,0,1,74,42a14.38,14.38,0,0,1,1.08,5.18l1,13c1,6.22,9.93,6.35,9.93,0a84.59,84.59,0,0,0-.92-12.62,28,28,0,0,0-2.68-11.14c-.16-.33-.31-.65-.47-1a16.38,16.38,0,0,1,6.42,1.37l.42,25L88.46,64H110l-.27-1.89.47-22.69a8.18,8.18,0,0,1,1.29,2.15,13.68,13.68,0,0,1,1,4.93l1,12.42c.67,4.34,8.48,6.16,9.46,0a80.56,80.56,0,0,0-.88-12,26.58,26.58,0,0,0-2.55-10.61c-3-6.41-8.2-10.72-13.16-10.93A164.55,164.55,0,0,0,81,25c-3.38.26-6.79.49-9.19.83a16.61,16.61,0,0,0-3.34-.71c-4-.33-10.62,0-14.59-.08a18.41,18.41,0,0,0-3.21.72c-2.37-.33-5.56-.6-8.73-.76a225.25,225.25,0,0,0-25.32.34ZM99.29,1.3a11.14,11.14,0,1,0,11.14,11.14A11.13,11.13,0,0,0,99.29,1.3ZM61.2,0A11.7,11.7,0,1,1,49.51,11.69,11.7,11.7,0,0,1,61.2,0ZM23.58,1.3A11.14,11.14,0,1,1,12.45,12.44,11.14,11.14,0,0,1,23.58,1.3Z"/>
            </svg>
            BandMates</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href='/setlist'>Setlist</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      </header>
      <main>
        

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col md:flex-row">
            <img
              src="/band1.jpg"
              className="mask mask-hexagon-2 max-w-sm rounded-lg shadow-2xl md:mr-8"
            />
            <div>
              <h1 className="text-5xl font-bold">BandMates</h1>
              <p className="py-6">
              BandMates helps bands create a setlist that they can use to enhance their band experience.
              </p>
              <button className="btn btn-secondary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer bg-neutral text-neutral-content p-10">
        <aside>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="45"
                height="45" viewBox="0 0 122.88 64.97">
              <defs>
                <style>{`.cls-1{fill-rule:evenodd;}`}</style>
              </defs>
              <title>friends-group</title>
              <path className="cls-1" d="M16.59,25.38c-5,.21-10.13,4.52-13.16,10.93A26.58,26.58,0,0,0,.88,46.92a80.56,80.56,0,0,0-.88,12c1,6.16,8.79,4.34,9.46,0l.95-12.42a13.68,13.68,0,0,1,1-4.93,8.18,8.18,0,0,1,1.29-2.15l.46,22.69L12.93,64H34.42l-.29-2.11.42-25a16.82,16.82,0,0,1,5.88-1.36q-.24.47-.48,1a27.81,27.81,0,0,0-2.67,11.14,84.62,84.62,0,0,0-.93,12.62c1,6.47,9.23,4.56,9.93,0l1-13A14.38,14.38,0,0,1,48.36,42a9,9,0,0,1,1.36-2.26l.49,22.63-.33,2.32H72.54l-.35-2.55.35-19.31v.4l.08-3.49A9.33,9.33,0,0,1,74,42a14.38,14.38,0,0,1,1.08,5.18l1,13c1,6.22,9.93,6.35,9.93,0a84.59,84.59,0,0,0-.92-12.62,28,28,0,0,0-2.68-11.14c-.16-.33-.31-.65-.47-1a16.38,16.38,0,0,1,6.42,1.37l.42,25L88.46,64H110l-.27-1.89.47-22.69a8.18,8.18,0,0,1,1.29,2.15,13.68,13.68,0,0,1,1,4.93l1,12.42c.67,4.34,8.48,6.16,9.46,0a80.56,80.56,0,0,0-.88-12,26.58,26.58,0,0,0-2.55-10.61c-3-6.41-8.2-10.72-13.16-10.93A164.55,164.55,0,0,0,81,25c-3.38.26-6.79.49-9.19.83a16.61,16.61,0,0,0-3.34-.71c-4-.33-10.62,0-14.59-.08a18.41,18.41,0,0,0-3.21.72c-2.37-.33-5.56-.6-8.73-.76a225.25,225.25,0,0,0-25.32.34ZM99.29,1.3a11.14,11.14,0,1,0,11.14,11.14A11.13,11.13,0,0,0,99.29,1.3ZM61.2,0A11.7,11.7,0,1,1,49.51,11.69,11.7,11.7,0,0,1,61.2,0ZM23.58,1.3A11.14,11.14,0,1,1,12.45,12.44,11.14,11.14,0,0,1,23.58,1.3Z"/>
            </svg>
          <p>
            Jose Ramos
            <br />
            Providing a better band experience
          </p>
        </aside>
        <nav>
            
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer> 
    </div>
  );
}