package page;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchPage {

	WebDriver driver;

	public SearchPage(WebDriver driver) {

		this.driver = driver;
	}

	@FindBy(how = How.CSS, using = "input[class='gLFyf gsfi']")
	WebElement Search_Locator;
	
	// Interactive Methods

	public void enterTheSearchWord(String word) {
		Search_Locator.sendKeys(word);

		Actions act = new Actions(driver);
		act.sendKeys(Keys.RETURN).build().perform();

	}

}
