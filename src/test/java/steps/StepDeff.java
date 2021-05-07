package steps;

import org.junit.After;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import page.SearchPage;
import util.BrowserFactory;

public class StepDeff {
	WebDriver driver;
	BrowserFactory browserfactory;
	SearchPage searchpage;

	@Before
	public void beforerun() {
		driver = BrowserFactory.init();
		searchpage= PageFactory.initElements(driver, SearchPage.class);
	}
	
	@Given("^User on google page$")
	public void user_on_google_page() throws Throwable {
		driver.get("https://www.google.com");
		Thread.sleep(2000);
	}

	@When("^User enter the search line \"([^\"]*)\"$")
	public void user_enter_the_search_line(String word) throws Throwable {
		searchpage.enterTheSearchWord(word);
		Thread.sleep(2000);
	}

	@When("^User clicks on search button$")
	public void user_clicks_on_search_button() throws Throwable {
		
		
	}

	@Then("^Search result will display$")
	public void search_result_will_display() throws Throwable {
	   
	}
	@After
	public void tearDown() {
		driver.close(); //closes the browser
		driver.quit();  //kills the process or it closes the object we have created
		
	}


}
