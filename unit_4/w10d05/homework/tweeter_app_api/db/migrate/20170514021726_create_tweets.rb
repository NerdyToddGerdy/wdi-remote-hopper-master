class CreateTweets < ActiveRecord::Migration[5.0]
  def change
    create_table :tweets do |t|
      t.string "title"
      t.string "content"
      t.string "author"
    end
  end
end
