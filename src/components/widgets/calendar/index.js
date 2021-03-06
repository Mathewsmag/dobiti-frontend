const index = () => {
    return (
        <div className="w-calendar">
            <div className="calendar">
                <header>
                    <h6 className="month">May</h6>
                </header>
                <table>
                    <thead>
                        <tr><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td><td>San</td></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-month={12} data-day={1}>1</td>
                            <td data-month={12} data-day={2}>2</td>
                            <td data-month={12} data-day={3}>3</td>
                            <td data-month={12} data-day={4}>4</td>
                            <td data-month={12} data-day={5}>5</td>
                            <td data-month={12} data-day={6}>6</td>
                            <td data-month={12} data-day={7}>7</td>
                        </tr>
                        <tr>
                            <td data-month={12} data-day={8}>8</td>
                            <td data-month={12} data-day={9}>9</td>
                            <td data-month={12} data-day={10}>10</td>
                            <td data-month={12} data-day={11}>11</td>
                            <td data-month={12} data-day={12}>12</td>
                            <td data-month={12} data-day={13}>13</td>
                            <td data-month={12} data-day={14}>14</td>
                        </tr>
                        <tr>
                            <td data-month={12} data-day={15}>15</td>
                            <td data-month={12} data-day={16}>16</td>
                            <td data-month={12} data-day={17}>17</td>
                            <td data-month={12} data-day={18}>18</td>
                            <td data-month={12} data-day={19}>19</td>
                            <td data-month={12} data-day={20}>20</td>
                            <td data-month={12} data-day={21}>21</td>
                        </tr>
                        <tr>
                            <td data-month={12} data-day={22}>22</td>
                            <td data-month={12} data-day={23}>23</td>
                            <td data-month={12} data-day={24}>24</td>
                            <td data-month={12} data-day={25}>25</td>
                            <td data-month={12} data-day={26}>26</td>
                            <td data-month={12} data-day={27}>27</td>
                            <td data-month={12} data-day={28}>28</td>
                        </tr>
                        <tr>
                            <td data-month={12} data-day={29}>29</td>
                            <td data-month={12} data-day={30}>30</td>
                            <td data-month={12} data-day={31}>31</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default index