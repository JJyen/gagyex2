import Calendar from "@/componets/calendar/Calendar";
import Chart from "@/componets/chart/Chart";
import SelectedDateDetail from "@/componets/date-detail/SelectedDateDetail";

export default function Home() {
  const labels = ["교통비", "꾸밈비", "식비", "여가", "자기계발", "기타"];

  return (
    <div className="home-container">
      <div className="calendar-info">
        <Calendar />
        <div>
          <div className="home-login-box">
            <button>눌러서 로그인</button>
            <div className="gagye-login-img">
              <img src="/assets/gagye1.png" alt="gagye1" />
            </div>
          </div>
          <SelectedDateDetail />
        </div>
      </div>
      <div className="bottom-box">
        <Chart labels={labels} />
        <div>
          <img alt="..." />
        </div>
      </div>
    </div>
  );
}
