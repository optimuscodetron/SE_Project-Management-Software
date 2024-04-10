import { render, screen } from "@testing-library/react";
import PSidebar from "./PSidebar";

jest.mock('react-router-dom');



beforeEach(
    () => {
        
    render(<PSidebar
        showSideBar={true}
        openUpcomingCycle={()=>{
            setShowIssues(false);
            setShowPreviousCycle(false);
            setShowCurrentCycle(false);
            setShowUpcomingCycle(true);
            }}
        openCurrentCycle={()=>{
            setShowIssues(false);
            setShowPreviousCycle(false);
            setShowCurrentCycle(false);
            setShowUpcomingCycle(true);
            }}
        openPreviousCycle={()=>{
            setShowIssues(false);
            setShowCurrentCycle(false);
            setShowUpcomingCycle(false);
            setShowPreviousCycle(true);
          }}
        openIssues = { ()=>{
            setShowUpcomingCycle(false);
            setShowPreviousCycle(false);
            setShowCurrentCycle(false);
            setShowIssues(true);}}
        />);
    }
);


test('test of Create Issues Text',()=>{
    

    // render(<PSidebar
    //     showSideBar={true}
    //     openUpcomingCycle={()=>{
    //         setShowIssues(false);
    //         setShowPreviousCycle(false);
    //         setShowCurrentCycle(false);
    //         setShowUpcomingCycle(true);
    //         }}
    //     openCurrentCycle={()=>{
    //         setShowIssues(false);
    //         setShowPreviousCycle(false);
    //         setShowCurrentCycle(false);
    //         setShowUpcomingCycle(true);
    //         }}
    //     openPreviousCycle={()=>{
    //         setShowIssues(false);
    //         setShowCurrentCycle(false);
    //         setShowUpcomingCycle(false);
    //         setShowPreviousCycle(true);
    //       }}
    //     openIssues = { ()=>{
    //         setShowUpcomingCycle(false);
    //         setShowPreviousCycle(false);
    //         setShowCurrentCycle(false);
    //         setShowIssues(true);}}
    //     />);

    const element = screen.getByTestId('createissue', {name:/create/i});
    // const element = screen.getByText("create issue",{exact : false});

    expect(element).toBeInTheDocument();
    // expect(element).toBeNull()
});


test('test of issues Text',()=>{
    
    const element = screen.getByTestId('issues', {name: /issue/i});
    expect(element).toBeInTheDocument();
});

test('test of setting Text',()=>{
    
    const element = screen.getByTestId('setting', {name: /setting/i});
    expect(element).toBeInTheDocument();
});
