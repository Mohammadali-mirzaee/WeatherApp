import './Weather.scss'
import sol from '../assets/sol.png'
import { useSelector } from 'react-redux'
function Sunny() {
    const weather = useSelector((state) => {
        return state.weather
    })

    return (
        <div className="sunny">
            <svg
                className="rightLogo"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="21"
                    cy="21"
                    r="21"
                    fill="black"
                    fill-opacity="0.1"
                />
                <path
                    d="M32.7538 30.9612L27.9758 26.1832C29.1261 24.6518 29.7471 22.7878 29.745 20.8725C29.745 15.9802 25.7648 12 20.8725 12C15.9802 12 12 15.9802 12 20.8725C12 25.7648 15.9802 29.745 20.8725 29.745C22.7878 29.7471 24.6518 29.1261 26.1832 27.9758L30.9612 32.7538C31.2031 32.97 31.5185 33.0854 31.8428 33.0763C32.1671 33.0673 32.4756 32.9344 32.705 32.705C32.9344 32.4756 33.0673 32.1671 33.0763 31.8428C33.0854 31.5185 32.97 31.2031 32.7538 30.9612ZM14.535 20.8725C14.535 19.6191 14.9067 18.3938 15.6031 17.3516C16.2994 16.3094 17.2892 15.4971 18.4472 15.0174C19.6053 14.5377 20.8795 14.4122 22.1089 14.6568C23.3382 14.9013 24.4675 15.5049 25.3538 16.3912C26.2401 17.2775 26.8437 18.4068 27.0882 19.6361C27.3328 20.8655 27.2073 22.1397 26.7276 23.2978C26.2479 24.4558 25.4356 25.4456 24.3934 26.1419C23.3512 26.8383 22.1259 27.21 20.8725 27.21C19.1923 27.208 17.5815 26.5396 16.3934 25.3516C15.2054 24.1635 14.537 22.5527 14.535 20.8725Z"
                    fill="white"
                />
            </svg>

            <svg
                className="leftLogo"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="2"
                    width="44"
                    height="44"
                >
                    <path
                        d="M29.3789 2.39648L25.2393 15H22.7168L18.5948 2.39648H21.46L23.9737 10.8076L26.4961 2.39648H29.3789Z"
                        fill="white"
                    />
                    <path
                        d="M45.6035 29.3788L33 25.2392L33 22.7167L45.6035 18.5947L45.6035 21.4599L37.1924 23.9736L45.6035 26.496L45.6035 29.3788Z"
                        fill="white"
                    />
                    <path
                        d="M18.6211 45.6035L22.7607 33L25.2832 33L29.4052 45.6035L26.54 45.6035L24.0263 37.1924L21.5039 45.6035L18.6211 45.6035Z"
                        fill="white"
                    />
                    <path
                        d="M2.39648 18.6212L15 22.7608L15 25.2833L2.39648 29.4053L2.39648 26.5401L10.8076 24.0264L2.39648 21.504L2.39648 18.6212Z"
                        fill="white"
                    />
                    <path
                        d="M43.0794 12.5274L31.2402 18.5123L29.4566 16.7286L35.4539 4.90186L37.4799 6.92788L33.3098 14.6529L41.041 10.489L43.0794 12.5274Z"
                        fill="white"
                    />
                    <path
                        d="M35.4726 43.0794L29.4877 31.2402L31.2714 29.4566L43.0981 35.4539L41.0721 37.4799L33.3471 33.3098L37.511 41.041L35.4726 43.0794Z"
                        fill="white"
                    />
                    <path
                        d="M4.92054 35.4726L16.7597 29.4877L18.5434 31.2714L12.5461 43.0981L10.5201 41.0721L14.6902 33.3471L6.959 37.511L4.92054 35.4726Z"
                        fill="white"
                    />
                    <path
                        d="M12.5275 4.92056L18.5124 16.7598L16.7287 18.5434L4.90193 12.5461L6.92796 10.5201L14.653 14.6902L10.489 6.95901L12.5275 4.92056Z"
                        fill="white"
                    />
                </mask>
                <g mask="url(#mask0)">
                    <circle cx="24" cy="24" r="21.6667" fill="white" />
                </g>
            </svg>
            {weather ? (
                <main>
                    <p>SOLIGT</p>

                    <img src={sol} alt="image not found" />

                    <p className="grader">{weather.current.temp}°</p>

                    <p className="city">GÖTEBORG</p>
                    <p className="time">07:37</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.0062 18.3219C8.52362 18.3219 5.69037 15.4887 5.69037 12.0062C5.69037 8.52362 8.52362 5.69037 12.0062 5.69037C15.4887 5.69037 18.3219 8.52362 18.3219 12.0062C18.3219 15.4887 15.4887 18.3219 12.0062 18.3219ZM12.0062 6.95353C9.22012 6.95353 6.95353 9.22012 6.95353 12.0062C6.95353 14.7922 9.22012 17.0588 12.0062 17.0588C14.7922 17.0588 17.0588 14.7922 17.0588 12.0062C17.0588 9.22012 14.7922 6.95353 12.0062 6.95353Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12 4.67368C11.6512 4.67368 11.3684 4.39092 11.3684 4.0421V0.631579C11.3684 0.282761 11.6512 0 12 0C12.3488 0 12.6316 0.282761 12.6316 0.631579V4.0421C12.6316 4.39092 12.3488 4.67368 12 4.67368Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12 24C11.6512 24 11.3684 23.7172 11.3684 23.3684V19.9579C11.3684 19.6091 11.6512 19.3263 12 19.3263C12.3488 19.3263 12.6316 19.6091 12.6316 19.9579V23.3684C12.6316 23.7172 12.3488 24 12 24Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M4.0421 12.6316H0.631579C0.282761 12.6316 0 12.3488 0 12C0 11.6512 0.282761 11.3684 0.631579 11.3684H4.0421C4.39092 11.3684 4.67368 11.6512 4.67368 12C4.67368 12.3488 4.39092 12.6316 4.0421 12.6316Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M23.3684 12.6316H19.9579C19.6091 12.6316 19.3263 12.3488 19.3263 12C19.3263 11.6512 19.6091 11.3684 19.9579 11.3684H23.3684C23.7172 11.3684 24 11.6512 24 12C24 12.3488 23.7172 12.6316 23.3684 12.6316Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M17.5921 7.03945C17.4305 7.03945 17.2688 6.97781 17.1455 6.85448C16.8989 6.60783 16.8989 6.20792 17.1455 5.96127L19.592 3.5147C19.8387 3.26805 20.2386 3.26805 20.4852 3.5147C20.7319 3.76135 20.7319 4.16127 20.4852 4.40791L18.0387 6.85448C17.9154 6.97781 17.7537 7.03945 17.5921 7.03945Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M3.96128 20.6702C3.79966 20.6702 3.638 20.6086 3.51468 20.4853C3.26806 20.2386 3.26806 19.8387 3.51468 19.5921L5.96124 17.1455C6.20789 16.8988 6.60781 16.8988 6.85446 17.1455C7.10108 17.3921 7.10108 17.7921 6.85446 18.0387L4.40789 20.4853C4.28457 20.6086 4.12291 20.6702 3.96128 20.6702Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M6.40785 7.03945C6.24622 7.03945 6.08457 6.97781 5.96124 6.85448L3.51468 4.40791C3.26806 4.16127 3.26806 3.76135 3.51468 3.5147C3.76132 3.26805 4.16124 3.26805 4.40789 3.5147L6.85446 5.96127C7.10108 6.20792 7.10108 6.60783 6.85446 6.85448C6.73113 6.97781 6.56948 7.03945 6.40785 7.03945Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M20.0386 20.6702C19.877 20.6702 19.7154 20.6086 19.592 20.4853L17.1455 18.0387C16.8989 17.7921 16.8989 17.3921 17.1455 17.1455C17.3921 16.8988 17.792 16.8988 18.0387 17.1455L20.4852 19.5921C20.7319 19.8387 20.7319 20.2386 20.4852 20.4853C20.3619 20.6086 20.2003 20.6702 20.0386 20.6702Z"
                                            fill="white"
                                        />
                                    </svg>
                                </td>
                                <td>08</td>
                                <td>19C</td>
                                <td>92%</td>
                                <td>1002hPa</td>
                            </tr>
                            <tr>
                                <td>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.0062 18.3219C8.52362 18.3219 5.69037 15.4887 5.69037 12.0062C5.69037 8.52362 8.52362 5.69037 12.0062 5.69037C15.4887 5.69037 18.3219 8.52362 18.3219 12.0062C18.3219 15.4887 15.4887 18.3219 12.0062 18.3219ZM12.0062 6.95353C9.22012 6.95353 6.95353 9.22012 6.95353 12.0062C6.95353 14.7922 9.22012 17.0588 12.0062 17.0588C14.7922 17.0588 17.0588 14.7922 17.0588 12.0062C17.0588 9.22012 14.7922 6.95353 12.0062 6.95353Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12 4.67368C11.6512 4.67368 11.3684 4.39092 11.3684 4.0421V0.631579C11.3684 0.282761 11.6512 0 12 0C12.3488 0 12.6316 0.282761 12.6316 0.631579V4.0421C12.6316 4.39092 12.3488 4.67368 12 4.67368Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12 24C11.6512 24 11.3684 23.7172 11.3684 23.3684V19.9579C11.3684 19.6091 11.6512 19.3263 12 19.3263C12.3488 19.3263 12.6316 19.6091 12.6316 19.9579V23.3684C12.6316 23.7172 12.3488 24 12 24Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M4.0421 12.6316H0.631579C0.282761 12.6316 0 12.3488 0 12C0 11.6512 0.282761 11.3684 0.631579 11.3684H4.0421C4.39092 11.3684 4.67368 11.6512 4.67368 12C4.67368 12.3488 4.39092 12.6316 4.0421 12.6316Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M23.3684 12.6316H19.9579C19.6091 12.6316 19.3263 12.3488 19.3263 12C19.3263 11.6512 19.6091 11.3684 19.9579 11.3684H23.3684C23.7172 11.3684 24 11.6512 24 12C24 12.3488 23.7172 12.6316 23.3684 12.6316Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M17.5921 7.03945C17.4305 7.03945 17.2688 6.97781 17.1455 6.85448C16.8989 6.60783 16.8989 6.20792 17.1455 5.96127L19.592 3.5147C19.8387 3.26805 20.2386 3.26805 20.4852 3.5147C20.7319 3.76135 20.7319 4.16127 20.4852 4.40791L18.0387 6.85448C17.9154 6.97781 17.7537 7.03945 17.5921 7.03945Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M3.96128 20.6702C3.79966 20.6702 3.638 20.6086 3.51468 20.4853C3.26806 20.2386 3.26806 19.8387 3.51468 19.5921L5.96124 17.1455C6.20789 16.8988 6.60781 16.8988 6.85446 17.1455C7.10108 17.3921 7.10108 17.7921 6.85446 18.0387L4.40789 20.4853C4.28457 20.6086 4.12291 20.6702 3.96128 20.6702Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M6.40785 7.03945C6.24622 7.03945 6.08457 6.97781 5.96124 6.85448L3.51468 4.40791C3.26806 4.16127 3.26806 3.76135 3.51468 3.5147C3.76132 3.26805 4.16124 3.26805 4.40789 3.5147L6.85446 5.96127C7.10108 6.20792 7.10108 6.60783 6.85446 6.85448C6.73113 6.97781 6.56948 7.03945 6.40785 7.03945Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M20.0386 20.6702C19.877 20.6702 19.7154 20.6086 19.592 20.4853L17.1455 18.0387C16.8989 17.7921 16.8989 17.3921 17.1455 17.1455C17.3921 16.8988 17.792 16.8988 18.0387 17.1455L20.4852 19.5921C20.7319 19.8387 20.7319 20.2386 20.4852 20.4853C20.3619 20.6086 20.2003 20.6702 20.0386 20.6702Z"
                                            fill="white"
                                        />
                                    </svg>
                                </td>
                                <td>09</td>
                                <td>21C</td>
                                <td>88%</td>
                                <td>1020hPa</td>
                            </tr>
                            <tr>
                                <td>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.0062 18.3219C8.52362 18.3219 5.69037 15.4887 5.69037 12.0062C5.69037 8.52362 8.52362 5.69037 12.0062 5.69037C15.4887 5.69037 18.3219 8.52362 18.3219 12.0062C18.3219 15.4887 15.4887 18.3219 12.0062 18.3219ZM12.0062 6.95353C9.22012 6.95353 6.95353 9.22012 6.95353 12.0062C6.95353 14.7922 9.22012 17.0588 12.0062 17.0588C14.7922 17.0588 17.0588 14.7922 17.0588 12.0062C17.0588 9.22012 14.7922 6.95353 12.0062 6.95353Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12 4.67368C11.6512 4.67368 11.3684 4.39092 11.3684 4.0421V0.631579C11.3684 0.282761 11.6512 0 12 0C12.3488 0 12.6316 0.282761 12.6316 0.631579V4.0421C12.6316 4.39092 12.3488 4.67368 12 4.67368Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12 24C11.6512 24 11.3684 23.7172 11.3684 23.3684V19.9579C11.3684 19.6091 11.6512 19.3263 12 19.3263C12.3488 19.3263 12.6316 19.6091 12.6316 19.9579V23.3684C12.6316 23.7172 12.3488 24 12 24Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M4.0421 12.6316H0.631579C0.282761 12.6316 0 12.3488 0 12C0 11.6512 0.282761 11.3684 0.631579 11.3684H4.0421C4.39092 11.3684 4.67368 11.6512 4.67368 12C4.67368 12.3488 4.39092 12.6316 4.0421 12.6316Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M23.3684 12.6316H19.9579C19.6091 12.6316 19.3263 12.3488 19.3263 12C19.3263 11.6512 19.6091 11.3684 19.9579 11.3684H23.3684C23.7172 11.3684 24 11.6512 24 12C24 12.3488 23.7172 12.6316 23.3684 12.6316Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M17.5921 7.03945C17.4305 7.03945 17.2688 6.97781 17.1455 6.85448C16.8989 6.60783 16.8989 6.20792 17.1455 5.96127L19.592 3.5147C19.8387 3.26805 20.2386 3.26805 20.4852 3.5147C20.7319 3.76135 20.7319 4.16127 20.4852 4.40791L18.0387 6.85448C17.9154 6.97781 17.7537 7.03945 17.5921 7.03945Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M3.96128 20.6702C3.79966 20.6702 3.638 20.6086 3.51468 20.4853C3.26806 20.2386 3.26806 19.8387 3.51468 19.5921L5.96124 17.1455C6.20789 16.8988 6.60781 16.8988 6.85446 17.1455C7.10108 17.3921 7.10108 17.7921 6.85446 18.0387L4.40789 20.4853C4.28457 20.6086 4.12291 20.6702 3.96128 20.6702Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M6.40785 7.03945C6.24622 7.03945 6.08457 6.97781 5.96124 6.85448L3.51468 4.40791C3.26806 4.16127 3.26806 3.76135 3.51468 3.5147C3.76132 3.26805 4.16124 3.26805 4.40789 3.5147L6.85446 5.96127C7.10108 6.20792 7.10108 6.60783 6.85446 6.85448C6.73113 6.97781 6.56948 7.03945 6.40785 7.03945Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M20.0386 20.6702C19.877 20.6702 19.7154 20.6086 19.592 20.4853L17.1455 18.0387C16.8989 17.7921 16.8989 17.3921 17.1455 17.1455C17.3921 16.8988 17.792 16.8988 18.0387 17.1455L20.4852 19.5921C20.7319 19.8387 20.7319 20.2386 20.4852 20.4853C20.3619 20.6086 20.2003 20.6702 20.0386 20.6702Z"
                                            fill="white"
                                        />
                                    </svg>
                                </td>
                                <td>10</td>
                                <td>22C</td>
                                <td>91%</td>
                                <td>1020hPa</td>
                            </tr>
                            <tr>
                                <td>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.0062 18.3219C8.52362 18.3219 5.69037 15.4887 5.69037 12.0062C5.69037 8.52362 8.52362 5.69037 12.0062 5.69037C15.4887 5.69037 18.3219 8.52362 18.3219 12.0062C18.3219 15.4887 15.4887 18.3219 12.0062 18.3219ZM12.0062 6.95353C9.22012 6.95353 6.95353 9.22012 6.95353 12.0062C6.95353 14.7922 9.22012 17.0588 12.0062 17.0588C14.7922 17.0588 17.0588 14.7922 17.0588 12.0062C17.0588 9.22012 14.7922 6.95353 12.0062 6.95353Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12 4.67368C11.6512 4.67368 11.3684 4.39092 11.3684 4.0421V0.631579C11.3684 0.282761 11.6512 0 12 0C12.3488 0 12.6316 0.282761 12.6316 0.631579V4.0421C12.6316 4.39092 12.3488 4.67368 12 4.67368Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12 24C11.6512 24 11.3684 23.7172 11.3684 23.3684V19.9579C11.3684 19.6091 11.6512 19.3263 12 19.3263C12.3488 19.3263 12.6316 19.6091 12.6316 19.9579V23.3684C12.6316 23.7172 12.3488 24 12 24Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M4.0421 12.6316H0.631579C0.282761 12.6316 0 12.3488 0 12C0 11.6512 0.282761 11.3684 0.631579 11.3684H4.0421C4.39092 11.3684 4.67368 11.6512 4.67368 12C4.67368 12.3488 4.39092 12.6316 4.0421 12.6316Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M23.3684 12.6316H19.9579C19.6091 12.6316 19.3263 12.3488 19.3263 12C19.3263 11.6512 19.6091 11.3684 19.9579 11.3684H23.3684C23.7172 11.3684 24 11.6512 24 12C24 12.3488 23.7172 12.6316 23.3684 12.6316Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M17.5921 7.03945C17.4305 7.03945 17.2688 6.97781 17.1455 6.85448C16.8989 6.60783 16.8989 6.20792 17.1455 5.96127L19.592 3.5147C19.8387 3.26805 20.2386 3.26805 20.4852 3.5147C20.7319 3.76135 20.7319 4.16127 20.4852 4.40791L18.0387 6.85448C17.9154 6.97781 17.7537 7.03945 17.5921 7.03945Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M3.96128 20.6702C3.79966 20.6702 3.638 20.6086 3.51468 20.4853C3.26806 20.2386 3.26806 19.8387 3.51468 19.5921L5.96124 17.1455C6.20789 16.8988 6.60781 16.8988 6.85446 17.1455C7.10108 17.3921 7.10108 17.7921 6.85446 18.0387L4.40789 20.4853C4.28457 20.6086 4.12291 20.6702 3.96128 20.6702Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M6.40785 7.03945C6.24622 7.03945 6.08457 6.97781 5.96124 6.85448L3.51468 4.40791C3.26806 4.16127 3.26806 3.76135 3.51468 3.5147C3.76132 3.26805 4.16124 3.26805 4.40789 3.5147L6.85446 5.96127C7.10108 6.20792 7.10108 6.60783 6.85446 6.85448C6.73113 6.97781 6.56948 7.03945 6.40785 7.03945Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M20.0386 20.6702C19.877 20.6702 19.7154 20.6086 19.592 20.4853L17.1455 18.0387C16.8989 17.7921 16.8989 17.3921 17.1455 17.1455C17.3921 16.8988 17.792 16.8988 18.0387 17.1455L20.4852 19.5921C20.7319 19.8387 20.7319 20.2386 20.4852 20.4853C20.3619 20.6086 20.2003 20.6702 20.0386 20.6702Z"
                                            fill="white"
                                        />
                                    </svg>
                                </td>
                                <td>11</td>
                                <td>22C</td>
                                <td>92%</td>
                                <td>1020hPa</td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            ) : (
                <div> loading</div>
            )}
        </div>
    )
}

export default Sunny
