import "../style/Join.css"

function MainJoin() {
    return (
    <> 
        <div className="circle-1-join"></div>
        <div className="circle-2-join"></div>
            <div className="join justify-content-around">
                <div className="text-join">
                    <p className="title-join">Join the <p className="title-join-pink">fun.</p></p>
                </div>
                <div className="form img-fluid">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="email" class="form-control bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control bg-transparent" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control bg-transparent" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" class="btn btn-join">Join now</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default MainJoin;