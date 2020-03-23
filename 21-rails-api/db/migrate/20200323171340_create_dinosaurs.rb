class CreateDinosaurs < ActiveRecord::Migration[5.2]
  def change
    create_table :dinosaurs do |t|
      t.string :species
      t.references :paddock, foreign_key: true

      t.timestamps
    end
  end
end
